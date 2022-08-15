import axios from "axios";
import { Question } from "./Types/types";

const aroundTheWordAPI = axios.create({
  baseURL: "https://opentdb.com",
});

export function getAroundTheWordQuiz() {
  return aroundTheWordAPI
    .get("/api.php?amount=5&category=22&difficulty=easy&type=multiple")
    .then((res) => {
      let questions: Question[] = res.data.results;

      return questions;
    });
}
