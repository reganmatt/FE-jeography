import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import "./css/App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </div>
  );
};

export default App;
