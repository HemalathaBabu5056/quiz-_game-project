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
];


// Variables to manage quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedTopic = "";
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz (){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();

}
 
function showQuestion() {
  // resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);

});

}

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild){
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

function selectAnswer(e) {
const selectedBtn  = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
  selectedBtn.classList.add("correct");
}else{
  selectedBtn.classList.add("incorrect");
}
  Array.from(answerButtons.children).forEach((button) => {
   if(button.dataset,correct === "true"){
    button.classList.add("correct");
   }
  });
}
  




startQuiz();




// Questions array
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
  // Add more questions as needed
];

// Variables to manage quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedTopic = "";
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Function to start the quiz for a particular topic
function startQuiz(topic) {
  selectedTopic = topic;
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.remove("hide");
  showQuestion(getNextQuestion());
}

// Function to get the next question for the selected topic
function getNextQuestion() {
  const topicQuestions = questions.filter((q) => q.topic === selectedTopic);
  return topicQuestions[currentQuestionIndex];
}

// Function to show a question
function showQuestion(question) {
  resetState();
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn", "btn-outline-primary", "btn-block", "my-2");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// Function to reset the state for the next question
function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Function to handle answer selection
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    score++;
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (
    currentQuestionIndex + 1 <
    questions.filter((q) => q.topic === selectedTopic).length
  ) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.innerText = "Finish";
    nextButton.classList.remove("hide");
  }
}

// Function to set the status class based on correctness
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("btn-success");
  } else {
    element.classList.add("btn-danger");
  }
}

// Function to clear status classes
function clearStatusClass(element) {
  element.classList.remove("btn-success");
  element.classList.remove("btn-danger");
}

// Function to handle the next button click
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (
    currentQuestionIndex <
    questions.filter((q) => q.topic === selectedTopic).length
  ) {
    showQuestion(getNextQuestion());
  } else {
    showScore();
  }
});

// Function to show the final score
function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${
    questions.filter((q) => q.topic === selectedTopic).length
  }!`;
  nextButton.innerText = "Restart";
  nextButton.classList.remove("hide");
  nextButton.addEventListener("click", () => {
    location.href = "index.html"; // Redirect to the index page
  });
}

// Initialize event listeners for starting quizzes
document.querySelectorAll("#start-quiz").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const topic = e.target
      .closest(".card")
      .querySelector(".card-title").innerText;
    startQuiz(topic);
  });
});
*/
