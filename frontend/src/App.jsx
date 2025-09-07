import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FileUpload from './components/FileUpload';
import Report from './components/Report';
import PhonePeGuide from "./pages/PhonePeGuide";

function App() {
  const [insights, setInsights] = useState(null);

  const handleAnalyze = (data) => {
    setInsights(data);
  };

  const handleReset = () => {
    setInsights(null);
  };

  return (
    <Router>
      <div className="container">

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              !insights ? (
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
              )
            }
          />

          {/* PhonePe guide route */}
          <Route path="/phonepe-guide" element={<PhonePeGuide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
