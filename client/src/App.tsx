import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./css/App.scss";
import Header from "./Components/Header";
import WordQuiz from "./Components/WordQuiz";
import CountryQuiz from "./Components/CountryQuiz";
import Profile from "./Components/Profile"

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/around-the-world" element={<WordQuiz />}></Route>
        <Route path="/:country" element={<CountryQuiz />}></Route>
      </Routes>
        <section className="footer">This is a footer</section>
    </div>
  );
};

export default App;
