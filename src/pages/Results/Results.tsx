import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import Button from "../../components/Button/Button";
import "./Results.scss";

interface ResultsIProps extends RouteComponentProps {}

function Results(props: ResultsIProps) {
  const numberOfQuestions = useSelector(
    (state: any) => state.trivia.questions.length
  );

  const numberOfCorrectAnswers = useSelector(
    (state: any) =>
      state.trivia.questions.filter(
        (question: any, index: number) =>
          question.correct_answer === state.trivia.answers[index]
      ).length
  );

  return (
    <div className="results">
      <h1>Thank You!</h1>
      <p>
        You answered {numberOfCorrectAnswers} out of {numberOfQuestions}{" "}
        questions correctly.
      </p>
      <div>
        <Button onClick={() => props.navigate && props.navigate("/")}>
          Start New Quiz
        </Button>
      </div>
    </div>
  );
}

export default Results;
