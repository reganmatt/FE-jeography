import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WordQuiz from "./Components/WordQuiz";
import CountryQuiz from "./Components/CountryQuiz";
import "./css/App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/around-the-world" element={<WordQuiz />}></Route>
          <Route path="/:country" element={<CountryQuiz />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
