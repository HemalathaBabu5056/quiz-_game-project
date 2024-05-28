



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

 const startButtons = document.querySelectorAll(".start-quiz");
 const quizSection = document.getElementById("quiz-section");
 const questionContainer = document.getElementById("question-container");
 const submitButton = document.getElementById("submit-quiz");
 let currentTopic = "";
 let userAnswers = [];


 /*
 startButtons.forEach((button) => {
   button.addEventListener("click", function () {
     currentTopic = this.getAttribute("data-topic");
     startQuiz(currentTopic);
   });
 });

 function startQuiz(topic) {
   const questions = quizData[topic];
   questionContainer.innerHTML = "";
   userAnswers = [];
   questions.forEach((q, index) => {
     const questionDiv = document.createElement("div");
     questionDiv.classList.add("mb-3");
     questionDiv.innerHTML = `
                <h5>${q.question}</h5>
                ${q.answers
                  .map(
                    (answer, i) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${index}" id="q${index}a${i}" value="${i}">
                        <label class="form-check-label" for="q${index}a${i}">${answer}</label>
                    </div>
                `
                  )
                  .join("")}
            `;
     questionContainer.appendChild(questionDiv);
   });
   quizSection.classList.remove("d-none");
   submitButton.classList.remove("d-none");
 }

 submitButton.addEventListener("click", function () {
   const questions = quizData[currentTopic];
   let score = 0;

   questions.forEach((q, index) => {
     const selectedAnswer = document.querySelector(
       `input[name="question${index}"]:checked`
     );
     if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
       score++;
     }
   });

   alert(
     `Your score: ${score}/${questions.length}\nRefresh the page to start over.`
   );
   quizSection.classList.add("d-none");
   submitButton.classList.add("d-none");
 });

*/

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
