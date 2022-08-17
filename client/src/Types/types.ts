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

  export interface Badges {
    _id: string;
    animal: string;
    animal_id: number;
    country: string;
    img_url: string;
  }

  export interface Students {  
    _id:string,
    type:string,
    username:string,
    avatarURL:string,
    password:string,
    email:string,
    userPoints:number,
    jeoRanch:string[],
    userStatus:string
  }

  
