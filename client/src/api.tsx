import axios from "axios";

const aroundTheWordAPI = axios.create({
    baseURL: "https://opentdb.com",
  });

  export function getAroundTheWordQuiz() {
    return aroundTheWordAPI.get("/api.php?amount=5&category=22&difficulty=easy&type=multiple").then((res) => {
        JSON.stringify(res)
      return res.data.results;
    });
  }
  