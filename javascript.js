
document.addEventListener("DOMContentLoaded", () => {
  const startButtons = document.querySelectorAll(".btn-outline-primary");
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score = 0;
  let currentQuizData = [];

  startButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const topic = button.parentElement
        .querySelector("h5")
        .textContent.toLowerCase()
        .replace(/\s+/g, "-");
      currentQuizData = quizData[topic];
      currentQuestionIndex = 0;
      score = 0;
      document.querySelector(".card-header").textContent = `Quiz: ${
        button.parentElement.querySelector("h5").textContent
      }`;
      showQuestion();
    });
  });

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
      showQuestion();
    } else {
      showScore();
    }
  });

  function showQuestion() {
    resetState();
    const currentQuestion = currentQuizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("btn", "btn-outline-dark", "mb-2");
      button.dataset.correct = index === currentQuestion.correct;
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    nextButton.classList.add("d-none");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
      score++;
    }
    Array.from(answerButtonsElement.children).forEach((button) => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("btn-success");
      } else {
        button.classList.add("btn-danger");
      }
    });
    nextButton.classList.remove("d-none");
  }

  function showScore() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${currentQuizData.length}!`;
    nextButton.textContent = "Restart Quiz";
    nextButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});

const quizData = {
  ocean: [
    {
      question: "What is the largest ocean?",
      answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correct: 0,
    },
    {
      question: "What is the deepest ocean?",
      answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correct: 0,
    },
    {
      question: "Which ocean is the smallest?",
      answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correct: 3,
    },
    {
      question: "Which ocean is on the east coast of the United States?",
      answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correct: 1,
    },
    {
      question: "Which ocean surrounds Antarctica?",
      answers: ["Pacific", "Atlantic", "Indian", "Southern"],
      correct: 3,
    },
  ],
  technology: [
    {
      question: "What does HTML stand for?",
      answers: [
        "Hypertext Markup Language",
        "Hyperlink and Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlink Text Markup Language",
      ],
      correct: 0,
    },
    {
      question: "What year was the first iPhone released?",
      answers: ["2005", "2006", "2007", "2008"],
      correct: 2,
    },
    {
      question: "What is the name of the first electronic computer?",
      answers: ["ENIAC", "UNIVAC", "IBM PC", "Apple I"],
      correct: 0,
    },
    {
      question: "What does CPU stand for?",
      answers: [
        "Central Processing Unit",
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
      correct: 0,
    },
    {
      question: "What is the most used programming language in 2021?",
      answers: ["Java", "Python", "JavaScript", "C++"],
      correct: 2,
    },
  ],
  geography: [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      correct: 0,
    },
    {
      question: "Which country is the largest by area?",
      answers: ["Russia", "Canada", "China", "USA"],
      correct: 0,
    },
    {
      question: "Which is the longest river in the world?",
      answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      correct: 1,
    },
    {
      question: "What is the smallest country in the world?",
      answers: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
      correct: 0,
    },
    {
      question: "Which desert is the largest in the world?",
      answers: ["Sahara", "Arabian", "Gobi", "Kalahari"],
      correct: 0,
    },
  ],
  "science-nature": [
    {
      question: "What is the chemical symbol for water?",
      answers: ["H2O", "O2", "CO2", "H2"],
      correct: 0,
    },
    {
      question: "What planet is known as the Red Planet?",
      answers: ["Mars", "Jupiter", "Saturn", "Venus"],
      correct: 0,
    },
    {
      question: "What is the largest mammal?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
      correct: 1,
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correct: 2,
    },
    {
      question: "What is the speed of light?",
      answers: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "50,000 km/s"],
      correct: 0,
    },
  ],
  "india-cultures": [
    {
      question: "Which festival is known as the festival of lights?",
      answers: ["Diwali", "Holi", "Eid", "Christmas"],
      correct: 0,
    },
    {
      question: "What is the capital of India?",
      answers: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
      correct: 1,
    },
    {
      question: "Which dance form is from Kerala?",
      answers: ["Kathak", "Bharatanatyam", "Kathakali", "Odissi"],
      correct: 2,
    },
    {
      question: "Who is the Father of the Nation?",
      answers: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Subhas Chandra Bose",
        "Sardar Patel",
      ],
      correct: 0,
    },
    {
      question: "What is the national animal of India?",
      answers: ["Lion", "Elephant", "Tiger", "Peacock"],
      correct: 2,
    },
  ],
  sports: [
    {
      question: "Which country won the FIFA World Cup in 2018?",
      answers: ["Germany", "Brazil", "France", "Argentina"],
      correct: 2,
    },
    {
      question: 'Which sport is known as the "king of sports"?',
      answers: ["Basketball", "Cricket", "Soccer", "Tennis"],
      correct: 2,
    },
    {
      question: "How many players are on a baseball team?",
      answers: ["7", "8", "9", "10"],
      correct: 2,
    },
    {
      question: "What is the national sport of Canada?",
      answers: ["Lacrosse", "Ice Hockey", "Basketball", "Soccer"],
      correct: 1,
    },
    {
      question: "Which sport uses a net, a racket, and a shuttlecock?",
      answers: ["Tennis", "Badminton", "Squash", "Table Tennis"],
      correct: 1,
    },
  ],
  "food-drink": [
    {
      question: "What is the main ingredient in guacamole?",
      answers: ["Tomato", "Onion", "Avocado", "Pepper"],
      correct: 2,
    },
    {
      question: "What is sushi traditionally wrapped in?",
      answers: ["Seaweed", "Rice", "Soy Paper", "Nori"],
      correct: 3,
    },
    {
      question: "Which country is known for inventing pizza?",
      answers: ["France", "USA", "Italy", "Spain"],
      correct: 2,
    },
    {
      question: "What is the most consumed beverage in the world?",
      answers: ["Coffee", "Tea", "Coca-Cola", "Water"],
      correct: 1,
    },
    {
      question: "What type of fruit is a banana?",
      answers: ["Citrus", "Berry", "Stone Fruit", "Pome"],
      correct: 1,
    },
  ],
};





/*
const questions = [
  {
    topic: "Ocean",
    question: "Which ocean is the largest on Earth?",
    answers: [
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    topic: "Ocean",
    question: "What is the deepest point in the ocean?",
    answers: [
      { text: "Mariana Trench", correct: true },
      { text: "Sunda Trench", correct: false },
      { text: "Java Trench", correct: false },
      { text: "Puerto Rico Trench", correct: false },
    ],
  },
  {
    topic: "Technology",
    question: "Who is the founder of Apple Inc.?",
    answers: [
      { text: "Steve Jobs", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Mark Zuckerberg", correct: false },
      { text: "Elon Musk", correct: false },
    ],
  },
  {
    topic: "Technology",
    question: "What does 'WWW' stand for in terms of internet?",
    answers: [
      { text: "World Wide Web", correct: true },
      { text: "Web World Wide", correct: false },
      { text: "World Wealth Web", correct: false },
      { text: "Wide World Web", correct: false },
    ],
  },
  {
    topic: "Geography",
    question: "Which continent is the driest on Earth?",
    answers: [
      { text: "Antarctica", correct: true },
      { text: "Africa", correct: false },
      { text: "Australia", correct: false },
      { text: "Asia", correct: false },
    ],
  },
  {
    topic: "Geography",
    question: "What is the capital city of Brazil?",
    answers: [
      { text: "Brasília", correct: true },
      { text: "Rio de Janeiro", correct: false },
      { text: "São Paulo", correct: false },
      { text: "Buenos Aires", correct: false },
    ],
  },
  // Add more questions for other topics as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

document.addEventListener("DOMContentLoaded", function () {
  startQuiz();
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setNextQuestion();
    } else {
      showResults();
    }
  });
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.add("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn", "btn-outline-primary", "m-2");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
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
  if (currentQuestionIndex < questions.length - 1) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.innerText = "Show Results";
    nextButton.classList.remove("hide");
  }
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

function showResults() {
  questionElement.innerText = `You scored ${score} out of ${questions.length}`;
  nextButton.innerText = "Restart Quiz";
  nextButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  resetState();
  nextButton.classList.remove("hide");
}
*/