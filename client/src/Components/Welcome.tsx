import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0, User } from "@auth0/auth0-react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/User";
import "../css/Welcome.scss";

const Welcome = () => {
  const { profile, setProfile } = useContext(UserContext);
  const { user } = useAuth0();

  useEffect(() => {
    if (user !== undefined) {
      axios
        .patch(
          `https://jeography.herokuapp.com/student/${user.nickname}/profile`
        )
        .then((response) => {});
    }
  }, [user]);
  const navigate = useNavigate();
  function handleClickProfile() {
    return navigate("/profile");
  }

  function handleClickQuiz() {
    return navigate("/select_quiz");
  }

  const badges = [
    "https://i.imgur.com/x0cwPla.png",
    "https://i.imgur.com/EmMa4Gz.png",
    "https://i.imgur.com/yxlSmoL.png",
    "https://i.imgur.com/mM4LmUV.png",
    "https://i.imgur.com/J1q0Gue.png",
  ];

  return (
    <div>
      <h1 className="welcome-text">Welcome {profile?.nickname}!</h1>
      <div className="welcome-btn-container">
        <button
          className="profile-btn"
          type="button"
          onClick={handleClickProfile}
        >
          Visit your profile
        </button>
        <button className="quiz-btn" type="button" onClick={handleClickQuiz}>
          Choose a quiz!
        </button>
      </div>
      <div className="welcome-jeoranch-container">
        <img
          className="welcome-jeoranch-badge"
          src="https://i.imgur.com/x0cwPla.png"
          alt="Jeoranch"
        />
        <img
          className="welcome-jeoranch-badge"
          src="https://i.imgur.com/EmMa4Gz.png"
          alt="Jeoranch"
        />
        <img
          className="welcome-jeoranch-badge"
          src="https://i.imgur.com/yxlSmoL.png"
          alt="Jeoranch"
        />
        <img
          className="welcome-jeoranch-badge"
          src="https://i.imgur.com/mM4LmUV.png"
          alt="Jeoranch"
        />
        <img
          className="welcome-jeoranch-badge"
          src="https://i.imgur.com/J1q0Gue.png"
          alt="Jeoranch"
        />
      </div>
    </div>
  );
};

export default Welcome;
