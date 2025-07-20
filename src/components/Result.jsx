import React from 'react';

function Result({ score, total, onRestart }) {
  return (
    <div className="result-box">
      <h2>Quiz Complete!</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}

export default Result;
