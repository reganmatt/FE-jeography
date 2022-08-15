import Header from "./Header";
import Results from "./Results";
import { useEffect, useState } from "react";
import * as api from "../api";
import { CountryQuestion } from "../Types/types";
import { useParams } from "react-router-dom";

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
    return <Results score={score} />;
  } else {
    let answers = [
      ...questions[questionNumber].incorrect_answers,
      questions[questionNumber].correct_answer,
    ].sort();

    return (
      <section>
        <Header />
        <p>
          This Quiz is on: {quiz === "NIRELAND" ? "NORTHERN IRELAND" : quiz}
        </p>
        <p>
          Question ({questionNumber}/5): {questions[questionNumber].question}
        </p>
        <div>
          <p>Answers:</p>
          <button
            onClick={() => {
              setAnswer(answers[0]);
              setDisableNextButton(false);
            }}
          >
            {answers[0]}
          </button>
          <button
            onClick={() => {
              setAnswer(answers[1]);
              setDisableNextButton(false);
            }}
          >
            {answers[1]}
          </button>
          <button
            onClick={() => {
              setAnswer(answers[2]);
              setDisableNextButton(false);
            }}
          >
            {answers[2]}
          </button>
          <button
            onClick={() => {
              setAnswer(answers[3]);
              setDisableNextButton(false);
            }}
          >
            {answers[3]}
          </button>
        </div>
        <button
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
        <div>
          <p>Don't lose your Jeo Badges!</p>
          <p>Sign up or login to collect your Jeos in your own ranch.</p>
        </div>
        <button>Ask for help</button>
      </section>
    );
  }
};

export default CountryQuiz;
