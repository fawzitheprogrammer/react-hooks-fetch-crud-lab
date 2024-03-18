import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function onDelete(selectedQuestion) {
    setQuestions((questions) =>
      questions.filter((question) => question.id !== selectedQuestion.id)
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => (
          <QuestionItem question={q} onDelete={onDelete} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;