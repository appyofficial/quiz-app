import styles from "./Questionnaire.module.css";
import shuffle from "../utils/shuffle";
import { useState, useEffect, Fragment } from "react";

const Questionnaire = ({ questions, currIndex, onClick }) => {
  const [is5050Used, setIs5050Used] = useState(false);

  const question = questions[currIndex];

  const [wrongAnswers, setWrongAnswers] = useState([
    ...question.incorrect_answers,
  ]);

  useEffect(() => {
    setWrongAnswers([...question.incorrect_answers]);
  }, [currIndex]);

  const answers = shuffle([question.correct_answer, ...wrongAnswers]);

  const handle5050 = () => {
    setIs5050Used(true);
    setWrongAnswers(wrongAnswers.slice(2));
  };

  return (
    <Fragment>
      <div className={styles.header}>
        <div></div>
        <div>
          <p>Lifelines</p>
          <button
            className={styles.lifeline}
            onClick={handle5050}
            disabled={is5050Used ? true : false}
          >
            50/50
          </button>
        </div>
      </div>
      <div className={styles.main}>
        <h5>
          Question : {currIndex + 1}/{questions.length}
        </h5>
        <h3>{question.question}</h3>
        <div className={styles.button__container}>
          {answers.map((answer, i) => (
            <div
              className={styles.button}
              key={i}
              onClick={() => onClick(answer)}
            >
              {answer}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Questionnaire;
