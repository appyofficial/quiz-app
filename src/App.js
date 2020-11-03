import { useState, useEffect } from "react";
import styles from "./App.module.css";
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
    <div className={styles.App}>
      {showResult ? (
        <div className={styles.showResult}>
          <h4>Result</h4>
          <p>Correct answer : {answeredCorrect}</p>
          <p>Wrong answer : {answeredWrong}</p>
        </div>
      ) : (
        <Questionnaire
          questions={questions}
          currIndex={currIndex}
          onClick={handleAnswerClick}
          answeredCorrect={answeredCorrect}
          answeredWrong={answeredWrong}
        />
      )}
    </div>
  );
}

export default App;
