import { useState } from 'react'
import './App.css'
import FileUpload from './components/FileUpload';
import Report from './components/Report';

function App() {
  const [insights, setInsights] = useState(null);

  const handleAnalyze = (data) => {
    setInsights(data);
  };

  const handleReset = () => {
    setInsights(null);
  };

  return (
    <div className="container">
      {!insights ? (
        <FileUpload onAnalyze={handleAnalyze} />
      ) : (
        <>
          <button
            onClick={handleReset}
            style={{
              color: 'black',
              background: 'white',
              border: '1px solid #ddd',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            ← Upload New File
          </button>
          <Report insights={insights} />
        </>
      )}
    </div>
  );
}

export default App
