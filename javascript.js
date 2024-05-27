
const questions = [
  {
    question: "What is my name?",
    answer: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ]
  },

  {
    question: "What is my name?",
    answer: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ]
  },

  {
    question: "What is my name?",
    answer: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score