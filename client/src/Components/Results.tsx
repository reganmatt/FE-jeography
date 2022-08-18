import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/Results.scss";
import * as api from "../api";
import { Badges } from "../Types/types";
import ConfettiWrap from "./ConfettiWrap";

interface UserScore {
  score: number;
  category: string;
}

const Results = ({ score, category }: UserScore) => {
  const [isLoading, setIsLoading] = useState(true);
  const [badges, setBadges] = useState<Badges[]>([]);
  const [badgeNumber, setBadgeNumber] = useState<number>(NaN);
  const avatar: string = "https://i.imgur.com/72YttcG.png";
 
  useEffect(() => {
    api.getBadges().then((badges) => {
      setBadges([...badges]);
      let randomBadgeNumber: number = Math.round(getRandomArbitrary(0, badges.length - 1));
      setBadgeNumber(randomBadgeNumber);
      setIsLoading(false);
    });
  }, [score, category]);

  function getRandomArbitrary(
    min: number = 0,
    max: number = badges.length - 1
  ): number {
    return Math.random() * (max - min) + min;
  }

  let lowScore = (
    <section>
      <p>Well done, you completed the quiz !</p>
      <p>Try to score 3 or more next time to get a new Jeo !</p>
    </section>
  );

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else {
    return (

      <div className="results_page">
        <p className="results">Results from your quiz on :</p>
        <p className="category">{category}</p>
        <section className="avatar_section">
          <img
            className="img"
            src={score > 2 ? badges[badgeNumber].img_url : avatar}
            alt="avatar"
          />
          <section className="score_section">
            <p className="score">{score} / 5</p>
            <p className="score_text">
              {score > 2 ? "Well done, you earned a Jeo!" : lowScore}
            </p>
            {score > 2 ? <ConfettiWrap /> : null}
          </section>
        </section>
        <section className="results_button">
          <Link to="/select_quiz">
            <Button
              size="small"
              variant="contained"
              style={{
                borderRadius: 35,
                backgroundColor: "#ffc107",
                fontSize: "18px",
              }}
            >
              Take another quiz !
            </Button>
          </Link>
          <Button
            size="small"
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: "#ef6694",
              fontSize: "18px",
            }}
          >
            Ask for help
          </Button>
        </section>
      </div>
    );
  }
};

export default Results;
