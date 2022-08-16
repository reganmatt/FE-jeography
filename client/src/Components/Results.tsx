import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import * as api from "../api";

interface UserScore {
  score: number;
  category: string;
}

const Results = ({ score, category }: UserScore) => {
  const [isLoading, setIsLoading] = useState(true);
  const [badges, setBadges] = useState<[]>([]);
  

  // useEffect(()=>{
  //   api.getBadges().then((badges) => {
  //     setBadges([...badges]);
  //     setIsLoading(false);
  //   });
  // }, [])

  return (
    <div>
      <Header />
      <section className="Results-Body">
        <section className="Results-Title">
      <p>Results from your {category} Quiz : {score}</p>
        </section>
        <section className="Results-Badge">

        </section>

      </section>
    </div>
  );
};

export default Results;
