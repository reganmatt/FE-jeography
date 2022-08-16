import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WordQuiz from "./Components/WordQuiz";
import CountryQuiz from "./Components/CountryQuiz";
import "./css/App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/around-the-world" element={<WordQuiz/>}></Route>
        </Routes>
         <Route path="/:country" element={<CountryQuiz />}></Route>
         <section className="footer">This is a footer</section>
        </Routes>

    </div>
  );
};

export default App;
