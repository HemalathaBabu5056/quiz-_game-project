const questions = [
  {
    question: "What is my name?",
    answer: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ],
  },

  {
    question: "What is my name?",
    answer: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ],
  },

  {
    question: "What is my name?",
    answer: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

//function to start Quiz with question inndex 0 with sccore 0 and to display next button for next question
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currwntQuestionIndex + 1;
questionElement.innerHtml = questionNo + ". " + currentQuestion.question;

cureentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

});
}
startQuiz();