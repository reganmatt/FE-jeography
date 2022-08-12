import Header from './Header';
import { useEffect, useState } from "react";
import * as api from "../api";

const WordQuiz = () => {
  const [questions, setQuestions]=useState([]);

  useEffect(()=>{
    api.getAroundTheWordQuiz().then(questions=>{
      console.log(questions)
      setQuestions(questions)
    })
  }, [])
  const b:object[] =questions
  const a:object = b[0]
  console.log(a, '<<<<<<<<<<<<<<<<<<<', typeof a)
const question:string = a.question
//console.log(questions[0].question)
    return (
      <div className="AroundTheWordQuizPage">
        <Header/>
        <section>
          {question}
          {/* {questions.map((question, index)=>{
return(<div>
  {console.log(question.question)}
</div>)
          })} */}
        </section>
      </div>
    );
  }


  export default WordQuiz;