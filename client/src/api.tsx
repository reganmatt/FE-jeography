import axios from "axios";
import { Question, CountryQuestion } from "./Types/types";

const aroundTheWordAPI = axios.create({
  baseURL: "https://opentdb.com",
});

const jeographyApi = axios.create({
  baseURL: "https://jeography.herokuapp.com/",
});

export function getAroundTheWordQuiz() {
  return aroundTheWordAPI
    .get("/api.php?amount=5&category=22&difficulty=easy&type=multiple")
    .then((res) => {
      let questions: Question[] = res.data.results;

      return questions;
    });
}

export function getBadges() {
  return jeographyApi.get("/jeoBadges").then((res) => {
    let badges = res.data.results;
    return badges;
  });
}

export function getCountry(country: string) {
  return jeographyApi
    .get(`/${country}`, {
      params: {
        country: country,
      },
    })
    .then(({ data }) => {
      console.log(data.selectedCountry);
      let questions: CountryQuestion[] = data.selectedCountry;

      return questions;
    });
}
