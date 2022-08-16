import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./css/App.scss";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import SelectQuiz from "./Components/SelectQuiz";
import WordQuiz from "./Components/WordQuiz";
import CountryQuiz from "./Components/CountryQuiz";
import "./css/App.scss";
import Profile from "./Components/Profile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/select_quiz" element={<SelectQuiz />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/around-the-world" element={<WordQuiz />}></Route>
        <Route path="/:country" element={<CountryQuiz />}></Route>
      </Routes>
        <section className="footer"></section>
      <section className="footer">This is a footer</section>
    </div>
  );
};

export default App;
