import styles from "./Questionnaire.module.css";
import shuffle from "../utils/shuffle";
import { useState } from "react";

const Questionnaire = ({ questions, currIndex, onClick }) => {
  const question = questions[currIndex];
  const answers = shuffle([
    question.correct_answer,
    ...question.incorrect_answers,
  ]);
  return (
    <div className={styles.main}>
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
  );
};

export default Questionnaire;
