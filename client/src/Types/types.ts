export interface Question {
    category: string;
    question: string;
    correct_answer: string;
    type: string;
    difficulty: string;
    incorrect_answers: string[];
  }

  export interface CountryQuestion {
    _id: string;
    question: string;
    correct_answer: string;
    country: string;
    incorrect_answers: string[];
  }

