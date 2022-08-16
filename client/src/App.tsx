import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import "./css/App.scss";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </div>
  );
};

export default App;
