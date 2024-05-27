


const questions = [
  {
    question: "What is the largest ocean on Earth?", //1
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: " Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Which ocean is the smallest?", //2
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Southern Ocean", correct: false },
      { text: "Arctic Ocean", correct: true },
    ],
  },
  {
    question:
      "Which ocean is located between Africa, Asia, Australia, and Antarctica?", //3
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: true },
      { text: "Southern Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What percentage of the Earth's surface is covered by oceans?", //4
    answers: [
      { text: "50%", correct: false },
      { text: "60%", correct: false },
      { text: "71% ", correct: true },
      { text: "80%", correct: false },
    ],
  },
  {
    question:
      "Which ocean is known for its 'Ring of Fire' due to high volcanic and earthquake activity?", //5
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Southern Ocean", correct: false },
      { text: "pacific Ocean", correct: true },
    ],
  },
  {
    question: "What is the main salt found in seawater?", //6
    answers: [
      { text: " Calcium sulfate", correct: false },
      { text: "Sodium chloride", correct: true },
      { text: "Potassium bromide", correct: false },
      { text: "Magnesium chloride", correct: false },
    ],
  },
  {
    question: "Which ocean is bordered by Europe, Asia, and North America?", //7
    answers: [
      { text: "Atlantic Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Southern Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question:
      "What is the term for the continuous movement of seawater in a particular direction?", //8
    answers: [
      { text: "Tide", correct: false },
      { text: "Wave", correct: false },
      { text: "Current", correct: true },
      { text: "Swell", correct: false },
    ],
  },
  {
    question: "Which ocean surrounds the continent of Antarctica?", //9
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Southern Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What causes ocean tides?", //10
    answers: [
      { text: "Wind", correct: false },
      { text: "Earth's rotation", correct: false },
      { text: "Gravitational pull of the moon and th sun", correct: true },
      { text: "Ocan current", correct: false },
    ],
  },
  {
    question: "Which ocean is the saltiest?", //11
    answers: [
      { text: "Atlantic Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Southern Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What is the process by which ocean water becomes salty?", //12
    answers: [
      { text: "Evaporation", correct: false },
      { text: "Condensation", correct: false },
      { text: "Precipitation", correct: false },
      { text: "Weathering of rocks", correct: true },
    ],
  },
  {
    question:
      "Which is the longest mountain range in the world, mostly underwater?", //13
    answers: [
      { text: "Rocky Mountains", correct: false },
      { text: "Andes Mountains", correct: false },
      { text: "Mid-Atlantic Ridge", correct: true },
      { text: "Himalayas", correct: false },
    ],
  },
  {
    question:
      "What is the largest type of seaweed found in the ocean, forming underwater forests?", //14
    answers: [
      { text: "Kelp", correct: true },
      { text: "Algae", correct: false },
      { text: "Phytoplankton", correct: false },
      { text: "Coral", correct: false },
    ],
  },

  {
    question: "What is the name of the deepest part of the ocean?", //15
    answers: [
      { text: " Tonga Trench", correct: false },
      { text: "Mariana Trench", correct: true },
      { text: " Java Trench", correct: false },
      { text: "Puerto Rico Trench", correct: false },
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
