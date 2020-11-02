import { useState } from "react";
import { Questionnaire } from "./components";
import quiz from "./data/quiz";
import shuffle from "./utils/shuffle";

function App() {
  const [currIndex, setCurrIndex] = useState(0);
  const [answeredCorrect, setAnsweredCorrect] = useState(0);
  const [answeredWrong, setAnsweredWrong] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const questions = shuffle(quiz).slice(-10);
  const question = questions[currIndex];

  const handleAnswerClick = (ans) => {
    if (ans === question.correct_answer) {
      setAnsweredCorrect(answeredCorrect + 1);
    } else {
      setAnsweredWrong(answeredWrong + 1);
    }

    if (currIndex >= questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h4>Result</h4>
          <p>Correct answer : {answeredCorrect}</p>
          <p>Wrong answer : {answeredWrong}</p>
        </div>
      ) : (
        <Questionnaire
          questions={questions}
          currIndex={currIndex}
          onClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
