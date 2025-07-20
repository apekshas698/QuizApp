import { useState } from 'react';
import mathQuestions from './MathsQuestion';
import Question from './components/Question';
import Result from './components/Result';
import './App.css'; // Or './index.css'

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (selected) => {
    if (selected === mathQuestions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < mathQuestions.length) {
      setCurrent(next);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="quiz-container">
      <h1>🧠 Maths Quiz</h1>
      {!isFinished ? (
        <Question data={mathQuestions[current]} onAnswerClick={handleAnswerClick} />
      ) : (
        <Result score={score} total={mathQuestions.length} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
