import axios from "axios";

import {
  Question,
  CountryQuestion,
  Badges,
  Students,
  Comments,
} from "./Types/types";

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
    let badges: Badges[] = res.data.badges;
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
      let questions: CountryQuestion[] = data.selectedCountry;
      return questions;
    });
}

export function getStudents() {
  return jeographyApi.get("/students").then(({ data: { students } }) => {
    return students;
  });
}


export function getComments(nickname: string) {
  return jeographyApi
    .get(`/comments/${nickname}`, {
      params: {
        username: nickname,
      },
    })
    .then(({ data }) => {
      let comments: Comments[] = data.comments;
      return comments;
    });
}
export function getStudentByUsername (nickname:string) {
  return jeographyApi
    .get(`/student/${nickname}`, {
      params: {
        username: nickname,
      },
    })
    .then(({ data: { profile } }) => {
      let student: Students[] = profile;
      return student;
    });
}

export function getCommentsByUsername(nickname: string) {
  return jeographyApi
    .get(`/comments/${nickname}`, {
      params: {
        username: nickname,
      },
    })
    .then(({ data: { comments } }) => {
      let studentComments: Comments[] = comments;
      return studentComments;
    });
}

export function postCommentByUsername(username: string, newComment: object) {
  return jeographyApi
    .post(`/comments/${username}`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
}
