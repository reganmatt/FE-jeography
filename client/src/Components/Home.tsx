import { Button } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import '../css/Home.scss'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, yellow} from '@mui/material/colors';



const theme = createTheme({
  palette: {
    primary: blue,
    secondary: yellow
  }
});

const Home = () => {
  return (
    <section className="homepage">
      <section className="left-align">

      <div className="home-title">
        <p className="home-title-1">Be a geography whizz</p>
        <p className="home-title-2">with our Jeography quizz!</p>
      </div>
      <section>
        <p>
          Take a quiz and collect your badge, it's called Jeo.
        </p>
        <p>Win at geography and watch your collection grow!</p>
      </section>
      <div>
      <ThemeProvider theme={theme}>
        <Button size="small" variant="contained" color="secondary">
          I'm a teacher
        </Button>
        </ThemeProvider>
        <Link to="/select_quiz">
        <Button className="student-btn" size="small" variant="contained">
          I'm a student
          
        </Button>
        </Link>
      </div>
      </section>
      <section className="align-right">
      <img src="https://media.giphy.com/media/UOdoMz3baCENO/giphy.gif"></img>
      </section>
    </section>
  );
};

export default Home;
