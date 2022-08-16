import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WordQuiz from "./Components/WordQuiz";
import CountryQuiz from "./Components/CountryQuiz";
import "./css/App.scss";
import StudentProfile from "./Components/StudentProfile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/around-the-world" element={<WordQuiz />}></Route>
        <Route path="/:country" element={<CountryQuiz />}></Route>
        <Route path="/student" element={<StudentProfile />}></Route>
      </Routes>
        <section className="footer"></section>
    </div>
  );
};

export default App;
