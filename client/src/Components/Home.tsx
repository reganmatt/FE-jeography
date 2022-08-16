import { Button } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div>
        <p>Be a geography whizz</p>
        <p>with our Jeography quiz!</p>
      </div>
      <div>
        <p>
          Revise geography and collect animal badges called Jeos. Win at
          geography and watch your Jeo collection grow!
        </p>
        <img src="https://i.imgur.com/72YttcG.png" alt="logo" />
        <Button size="small" variant="contained">
          I'm a teacher
        </Button>
        <Button size="small" variant="contained">
          I'm a student
        </Button>
      </div>
    </section>
  );
};

export default Home;
