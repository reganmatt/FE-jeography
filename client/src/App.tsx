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
import TeacherPage from "./Components/TeacherPage";
import Profile from "./Components/Profile";
import StudentProfile from "./Components/StudentProfile";


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
        <Route path="/teacher" element={<TeacherPage />}></Route>
        <Route path="/students/:nickname" element={<StudentProfile />}></Route>
      </Routes>
        <section className="footer"></section>
      <section className="footer">This is a footer</section>
    </div>
  );
};

export default App;
