import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import * as api from "../api";
import { Badges } from "../Types/types";

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
      <div>
        <Header />
        <section className="Results-Body">
          <section className="Results-Title">
            <p>Results from your quiz on :</p>
            <p>{category}</p>
            <img
              src={score > 2 ? badges[badgeNumber].img_url : avatar}
              alt="avatar"
            />
            <p>{score} / 5</p>
            <p>{score > 2 ? "Well done, you earned a Jeo!" : lowScore}</p>
            <Link to="/select_quiz">
              <Button size="small" variant="contained">
                Take another quiz !
              </Button>
            </Link>
            <Button size="small" variant="contained">
              Ask for help
            </Button>
          </section>
          <section className="Results-Badge"></section>
        </section>
      </div>
    );
  }
};

export default Results;
