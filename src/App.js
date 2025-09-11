// src/App.js
import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import ResultDisplay from './components/ResultDisplay';
import { predictMathScore } from './services/api';
import './App.css';

function App() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePrediction = async (formData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await predictMathScore(formData);
      setPrediction(response.prediction);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Performance Predictor</h1>
        <p>Predict math scores based on student characteristics</p>
      </header>
      
      <main className="App-main">
        <PredictionForm onSubmit={handlePrediction} />
        
        {loading && <div className="loading">Processing your prediction...</div>}
        
        {error && (
          <div className="error">
            <h3>Error</h3>
            <p>{error}</p>
          </div>
        )}
        
        {prediction !== null && !loading && (
          <ResultDisplay prediction={prediction} />
        )}
      </main>
      
      <footer className="App-footer">
        <p>ML App powered by React and Flask</p>
      </footer>
    </div>
  );
}

export default App;