import { useState } from 'react';
import { API_BASE_URL } from '../config.js';

export default function FileUpload({ onAnalyze }) {
            const [selectedFile, setSelectedFile] = useState(null);
            const [loading, setLoading] = useState(false);
            const [dragOver, setDragOver] = useState(false);

            const handleFileSelect = (file) => {
                setSelectedFile(file);
            };

            const handleAnalyze = async () => {
                if (!selectedFile) return;

                setLoading(true);
                try {
                    const formData = new FormData();
                    formData.append('file', selectedFile);

                    const response = await fetch(`${API_BASE_URL}/analyze-statement`, {
                        method: 'POST',
                        body: formData,
                    });

                    const result = await response.json();
                    
                    if (result.success) {
                        onAnalyze(result.insights);
                    } else {
                        throw new Error(result.detail || 'Failed to analyze');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Error analyzing file: ' + error.message);
                } finally {
                    setLoading(false);
                }
            };

            const handleDrop = (e) => {
                e.preventDefault();
                setDragOver(false);
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    handleFileSelect(files[0]);
                }
            };

            const handleDragOver = (e) => {
                e.preventDefault();
                setDragOver(true);
            };

            const handleDragLeave = () => {
                setDragOver(false);
            };

            return (
                <div 
                    className={`upload-zone ${dragOver ? 'dragover' : ''}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    <h1 className="upload-title">💰 Financial Friend</h1>
                    <p className="upload-subtitle">
                        Upload your payment statement and get friendly insights about your spending
                    </p>

                    <input
                        type="file"
                        id="file-input"
                        className="file-input"
                        accept=".csv,.pdf,.xlsx,.xls"
                        onChange={(e) => e.target.files[0] && handleFileSelect(e.target.files[0])}
                    />

                    <label htmlFor="file-input">
                        <button 
                            className="upload-button"
                            onClick={() => document.getElementById('file-input').click()}
                        >
                            Choose Your Statement
                        </button>
                    </label>

                    <p style={{ margin: '12px 0', color: '#718096', fontSize: '14px' }}>
                        Supports: PhonePe CSV, GPay CSV, Bank statements (CSV/PDF)
                    </p>

                    {selectedFile && (
                        <div className="file-info">
                            <p><strong>Selected:</strong> {selectedFile.name}</p>
                            <p><strong>Size:</strong> {(selectedFile.size / 1024).toFixed(1)} KB</p>
                            <button 
                                className="upload-button" 
                                style={{ marginTop: '12px' }}
                                onClick={handleAnalyze}
                                disabled={loading}
                            >
                                {loading ? 'Analyzing...' : 'Get My Report 🚀'}
                            </button>
                        </div>
                    )}

                    {loading && (
                        <div className="loading">
                            <p>🔍 Reading your statement...</p>
                            <p>💡 Finding patterns...</p>
                            <p>📊 Generating insights...</p>
                        </div>
                    )}
                </div>
            );
        }