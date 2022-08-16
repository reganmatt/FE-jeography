import { useEffect, useState } from "react";
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
  const [badgeNumber, setBadgeNumber] = useState(null);

  useEffect(() => {
    api.getBadges().then((badges) => {
      setBadges([...badges]);
      setIsLoading(false);
      let a: number = getRandomArbitrary(0, badges.length);
      setBadgeNumber(a);
    });
  }, []);

  function getRandomArbitrary(
    min: number = 0,
    max: number = badges.length
  ): number {
    return Math.random() * (max - min) + min;
  }

  let lowScore = (
    <section>
      <p>Well done, you completed the quiz !</p>
      <p>Try to score 3 or more next time to get a new Jeo !</p>
    </section>
  );

  return (
    <div>
      <Header />
      <section className="Results-Body">
        <section className="Results-Title">
          <p>Results from your quiz on :</p>
          <p>{category}</p>
          <p>{score} / 5</p>
          <p>{score > 2 ? "Well done, you earned a Jeo!" : lowScore}</p>
        </section>
        <section className="Results-Badge"></section>
      </section>
    </div>
  );
};

export default Results;
