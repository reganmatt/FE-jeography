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
import { UserContext } from "./context/User";
import {useEffect, useState} from 'react'
import { useAuth0, User } from "@auth0/auth0-react";

const App: React.FC = () => {
  
  type JeographyUser = User&{type: string, avatarURL: string, jeoRanch:string[], userPoints: number, userStatus: string}

  let userProps = { type:'student',avatarURL:'https://i.imgur.com/T5IjKoI.png',jeoRanch:['https://i.imgur.com/oxYZ7c2.png', 'https://i.imgur.com/T5IjKoI.png'],userPoints:0,userStatus:'Learning geography with jeography!'}

  const {isAuthenticated, user} = useAuth0()
  const [profile, setProfile] = useState<JeographyUser>()
  
  
  useEffect(() => {
    if (isAuthenticated && user !== undefined) {
      const newUserObj= {...user, ...userProps }
      setProfile(newUserObj)
    }
  }, [isAuthenticated])

  return (
    <UserContext.Provider value={{profile, setProfile}}>
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
      </Routes>
        <section className="footer"></section>
      <section className="footer">This is a footer</section>
    </div>
    </UserContext.Provider>
  );
};

export default App;
