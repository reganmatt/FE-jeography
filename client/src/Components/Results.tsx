import Header from "./Header";

interface UserScore {
  score: number;
}

const Results = ({ score }: UserScore) => {
  return (
    <div>
      <Header />
      <p>Results : {score}</p>
    </div>
  );
};

export default Results;
