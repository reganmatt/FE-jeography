import Header from "./Header";
import Results from "./Results";
import { useEffect, useState } from "react";
import * as api from "../api";
import { Question } from "../Types/types";
import '../css/AtwQuiz.scss';

const WordQuiz = () => {
  let [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [disableNextButton, setDisableNextButton] = useState(true);

  useEffect(() => {
    api.getAroundTheWordQuiz().then((questions) => {
      setQuestions(questions);
      setIsLoading(false);
    });
  }, []);
  let quiz = "Around The World";

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else if (questionNumber === 5) {
    return <Results category={quiz} score={score} />;
  } else {
    let answers = [
      ...questions[questionNumber].incorrect_answers,
      questions[questionNumber].correct_answer,
    ].sort();

    return (
      <div className="AroundTheWorldQuizPage">
        <Header />
        <section className="quiz-progress">  Question ({questionNumber + 1}/5)</section>
        <section className="quiz-title">
        <p>This Quiz is on...</p>
        <p className="quiz-country">{quiz}</p>
        </section>
        <section className="quiz-body">
        <p className="question-title">
         {questions[questionNumber].question}
        </p>
        <section className="possible-answers">
        <div>
          <section className="flex">
            <button className="answer-option"
              onClick={() => {
                setAnswer(answers[0]);
                setDisableNextButton(false);
              }}
              >
              {answers[0]}
            </button>
            <button className="answer-option"
              onClick={() => {
                setAnswer(answers[1]);
                setDisableNextButton(false);
              }}
              >
              {answers[1]}
            </button>
          </section>
          <section className="flex">
            <button className="answer-option"
              onClick={() => {
                setAnswer(answers[2]);
                setDisableNextButton(false);
              }}
              >
              {answers[2]}
            </button>
            <button className="answer-option"
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
        <div>
          <p>Don't lose your Jeo Badges!</p>
          <p>Sign up or login to collect your Jeos in your own ranch.</p>
        </div>
        <button>Ask for help</button>
      </div>
    );
  }
};

export default WordQuiz;
