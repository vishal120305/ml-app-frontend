// src/components/ResultDisplay.js
import React from 'react';

const ResultDisplay = ({ prediction }) => {
  return (
    <div className="result-display">
      <h2>Prediction Result</h2>
      <div className="prediction-value">
        Predicted Math Score: <span>{prediction}</span>
      </div>
      <div className="prediction-explanation">
        <p>This prediction is based on the student characteristics you provided.</p>
        <p>The model has been trained on historical student performance data.</p>
      </div>
    </div>
  );
};

export default ResultDisplay;