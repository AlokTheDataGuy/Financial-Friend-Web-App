import { useState } from 'react'
import './App.css'
import FileUpload from './components/FileUpload';
// import EnhancedReport from './components/EnhancedReport';

import Report from './components/Report';
import ClarificationModal from './components/ClarificationModal';

export default function App() {
  const [insights, setInsights] = useState(null);
  const [showClarifications, setShowClarifications] = useState(false);

  const handleAnalyze = (data) => {
    setInsights(data);
    // Check if clarifications are needed
    if (data.clarifications_needed && data.clarifications_needed.length > 0) {
      setShowClarifications(true);
    }
  };

  const handleClarificationSubmit = async (classifications) => {
    try {
      // Send classifications to backend
      const response = await fetch(`${API_BASE_URL}/update-classifications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ classifications })
      });

      if (response.ok) {
        // In a real app, you'd get updated insights back
        setShowClarifications(false);
        alert('Thanks! Your report has been updated with these clarifications.');
      }
    } catch (error) {
      console.error('Error updating classifications:', error);
      alert('Error updating classifications. Please try again.');
    }
  };

  const handleReset = () => {
    setInsights(null);
    setShowClarifications(false);
  };

  return (
    <div style={{
       backgroundColor: '#f5f7fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '900px', margin: '0 auto', padding: '20px'
      }}>
        {!insights ? (
          <FileUpload onAnalyze={handleAnalyze} />
        ) : (
          <>
            <button
              onClick={handleReset}
              style={{
                backgroundColor: 'white', color: '#666', border: '1px solid #ddd',
                padding: '8px 16px', borderRadius: '6px', cursor: 'pointer',
                marginBottom: '20px', fontSize: '14px'
              }}
            >
              ← Upload New File
            </button>
            <Report insights={insights} />
          </>
        )}

        {/* Clarification Modal */}
        {showClarifications && insights?.clarifications_needed && (
          <ClarificationModal 
            clarifications={insights.clarifications_needed}
            onSubmit={handleClarificationSubmit}
            onSkip={() => setShowClarifications(false)}
          />
        )}
      </div>
    </div>
  );
}