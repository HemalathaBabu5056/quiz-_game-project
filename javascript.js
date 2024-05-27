


const questions = [
  {
    question: "What is my name?",
    answers: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ],
  },
  {
    question: "What is my name?",
    answers: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ],
  },
  {
    question: "What is my name?",
    answers: [
      { text: "Hemalatha", correct: true },
      { text: "Hema", correct: false },
      { text: "Koushi", correct: false },
      { text: "Koushika", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add(
      "btn",
      "btn-outline-dark",
      "border",
      "border-dark",
      "p-2",
      "mb-2",
      "mx-4",
      "w-50"
    );
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    score++;
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === "true");
  });
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("btn-success");
  } else {
    element.classList.add("btn-danger");
  }
}

function clearStatusClass(element) {
  element.classList.remove("btn-success");
  element.classList.remove("btn-danger");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert("Quiz finished! Your score is: " + score);
  }
});

startQuiz();
