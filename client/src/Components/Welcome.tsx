import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0, User } from "@auth0/auth0-react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/User";

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
  }
  , [user]);
  const navigate = useNavigate();
  function handleClick() {
    return navigate("/profile");
  }

  return (
    <div>
      Welcome!
      <button type="button" onClick={handleClick}>
        Open the Jeo Ranch!
      </button>
    </div>
  );
};

export default Welcome;
