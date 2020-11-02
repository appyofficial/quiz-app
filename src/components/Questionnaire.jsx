const Questionnaire = ({ questions, currIndex, onClick }) => {
  const question = questions[currIndex];
  const answers = [question.correct_answer, ...question.incorrect_answers];
  return (
    <div>
      <h3>{question.question}</h3>
      <div>
        {answers.map((answer, i) => (
          <div key={i} onClick={() => onClick(answer)}>
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
