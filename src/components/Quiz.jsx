import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import dataDBMS from '../assets/dbms.json';
import dataOS from '../assets/os.json';

const dataMap = {
  dbms: dataDBMS,
  os: dataOS,
};

const Quiz = ({ mode }) => {
  const { subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    setQuestions(dataMap[subject]);
  }, [subject]);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions({ ...selectedOptions, [questionIndex]: optionIndex });

    const correctAnswer = questions[questionIndex].correct;
    if (optionIndex === correctAnswer) {
      setFeedback({ ...feedback, [questionIndex]: 'correct' });
    } else {
      setFeedback({ ...feedback, [questionIndex]: 'incorrect' });
    }
  };

  const getCheckboxIcon = (questionIndex, optionIndex) => {
    if (selectedOptions[questionIndex] === optionIndex) {
      return feedback[questionIndex] === 'correct' ? (
        <FaCheckCircle style={{ color: mode === 'dark' ? '#28a745' : 'green' }} />
      ) : (
        <FaTimesCircle style={{ color: mode === 'dark' ? '#dc3545' : 'red' }} />
      );
    }
    return null;
  };

  return (
    <div className="container my-4">
      {questions.map((question, qIndex) => (
        <div
          className={`card mb-4 ${mode === 'dark' ? 'text-white' : 'text-dark'}`}
          style={{ backgroundColor: mode === 'dark' ? '#343a40' : 'white' }}
          key={qIndex}
        >
          <div className="card-body">
            <h5 className="card-title">Question {qIndex + 1}: {question.question}</h5>
            {question.options.map((option, oIndex) => (
              <div key={oIndex} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedOptions[qIndex] === oIndex}
                  onChange={() => handleOptionChange(qIndex, oIndex)}
                />
                <label className="form-check-label">
                  {option} {getCheckboxIcon(qIndex, oIndex)}
                </label>
              </div>
            ))}
            {selectedOptions[qIndex] !== undefined && (
              <div
                className="mt-3"
                style={{
                  color: feedback[qIndex] === 'correct' ? (mode === 'dark' ? '#28a745' : 'green') : (mode === 'dark' ? '#dc3545' : 'red'),
                }}
              >
                {feedback[qIndex] === 'correct' ? (
                  <p>Explanation: {question.detailedAnswer}</p>
                ) : (
                  <p>
                    Explanation: {question.detailedAnswer} (Correct: {question.options[question.correct]})
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
