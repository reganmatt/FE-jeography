import Header from "./Header";
import Results from "./Results";
import { useEffect, useState } from "react";
import * as api from "../api";
import { CountryQuestion } from "../Types/types";
import { useParams } from "react-router-dom";
import "../css/Quiz.scss";

const CountryQuiz = () => {
  let country: string = useParams().country + "DB";
  let [questions, setQuestions] = useState<CountryQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [disableNextButton, setDisableNextButton] = useState(true);

  useEffect(() => {
    api.getCountry(country).then((questions) => {
      setQuestions(questions);
      setIsLoading(false);
    });
  }, []);

  let quiz = country.slice(0, country.length - 2).toUpperCase();

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else if (questionNumber === 5) {
    return <Results score={score} category={quiz} />;
  } else {
    let answers = [
      ...questions[questionNumber].incorrect_answers,
      questions[questionNumber].correct_answer,
    ].sort();

    return (
      <section className="quiz-progress">
        {" "}
        Question ({questionNumber + 1}/5)
        <section className="quiz-title">
          <p>This Quiz is on...</p>
          <p className="quiz-country">
            {quiz === "NIRELAND" ? "NORTHERN IRELAND" : quiz}
          </p>
        </section>
        <section className="quiz-body">
          <p className="question-title">{questions[questionNumber].question}</p>
          <section className="possible-answers">
            <div>
              <section className="flex">
                <button
                  className="answer-option"
                  onClick={() => {
                    setAnswer(answers[0]);
                    setDisableNextButton(false);
                  }}
                >
                  {answers[0]}
                </button>
                <button
                  className="answer-option"
                  onClick={() => {
                    setAnswer(answers[1]);
                    setDisableNextButton(false);
                  }}
                >
                  {answers[1]}
                </button>
              </section>
              <section className="flex">
                <button
                  className="answer-option"
                  onClick={() => {
                    setAnswer(answers[2]);
                    setDisableNextButton(false);
                  }}
                >
                  {answers[2]}
                </button>
                <button
                  className="answer-option"
                  onClick={() => {
                    setAnswer(answers[3]);
                    setDisableNextButton(false);
                  }}
                >
                  {answers[3]}
                </button>
              </section>
            </div>
          </section>
          <button
            className="next-question-btn"
            onClick={() => {
              setQuestionNumber(questionNumber + 1);
              setDisableNextButton(true);
              if (answer === questions[questionNumber].correct_answer) {
                setScore(score + 1);
              }
            }}
            disabled={disableNextButton}
          >
            Next Question
          </button>
        </section>
        <section className="help-button-container">
          <button className="help-button">Ask for help</button>
        </section>
      </section>
    );
  }
};

export default CountryQuiz;
