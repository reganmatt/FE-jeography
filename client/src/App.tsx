import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import WordQuiz from "./Components/WordQuiz";
import "./css/App.scss";

const App: React.FC = () => {
  console.log(process.env)
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/around-the-world" element={<WordQuiz/>}></Route>
        </Routes>
   <section className="footer">This is a footer</section>
    </div>
  );
};

export default App;
