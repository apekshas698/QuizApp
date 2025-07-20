import React from 'react';

function Question({ data, onAnswerClick }) {
  return (
    <div className="question-box">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((opt, index) => (
          <button key={index} onClick={() => onAnswerClick(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
