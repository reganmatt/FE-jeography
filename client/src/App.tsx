import React from "react";
import { Routes, Route } from "react-router-dom";
import SelectQuiz from "./Components/SelectQuiz";
import WordQuiz from "./Components/WordQuiz";
import Home from "./Components/Home";
import CountryQuiz from "./Components/CountryQuiz";
import "./css/App.scss";
import TeacherPage from "./Components/TeacherPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/select_quiz" element={<SelectQuiz />}></Route>
        <Route path="/around-the-world" element={<WordQuiz />}></Route>
        <Route path="/:country" element={<CountryQuiz />}></Route>
        <Route path="/teacher" element={<TeacherPage />}></Route>
      </Routes>
      <section className="footer">This is a footer</section>
    </div>
  );
};

export default App;
