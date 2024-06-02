


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
    topic: "Ocean",
    question: "Who is the founder of Apple Inc.?",
    answers: [
      { text: "Steve Jobs", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Mark Zuckerberg", correct: false },
      { text: "Elon Musk", correct: false },
    ],
  },
  {
    topic: "Ocean",
    question: "What does 'WWW' stand for in terms of internet?",
    answers: [
      { text: "World Wide Web", correct: true },
      { text: "Web World Wide", correct: false },
      { text: "World Wealth Web", correct: false },
      { text: "Wide World Web", correct: false },
    ],
  },
  {
    topic: "Ocean",
    question: "Which continent is the driest on Earth?",
    answers: [
      { text: "Antarctica", correct: true },
      { text: "Africa", correct: false },
      { text: "Australia", correct: false },
      { text: "Asia", correct: false },
    ],
  },
  {
    topic: "Ocean",
    question: "What is the capital city of Brazil?",
    answers: [
      { text: "Brasília", correct: true },
      { text: "Rio de Janeiro", correct: false },
      { text: "São Paulo", correct: false },
      { text: "Buenos Aires", correct: false },
    ],
  },
];


// Variables to manage quiz state
let currentQuestionIndex = 0;
let score = 0;
  let currentQuizData = [];
let selectedTopic = "";
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");



function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}


function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
        button.classList.add("btn", "btn-outline-dark", "btn-block", "my-2");

    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.classList.add("d-none");
  while (answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


function selectAnswer(event) {
  const selectedBtn = event.target;
  const correct = selectedBtn.dataset.correct === "true";
  if (correct) {
    score++;
  }
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("btn-success");
    } else {
      button.classList.add("btn-danger");
    }
  });
  nextButton.classList.remove("d-none");
}

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   }else{
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach(button => {
//      button.disabled = true;
//     if (button.dataset.correct === "true"){
//       button.classList.add("correct");
//     }
   
//   });
//   nextButton.style.dispaly = "block";
// }
// function showScore() {
//   resetState();
//   questionElement.innerText = `You scored ${score} out of ${questionsByTopic.length}!`;
//   nextButton.innerText = "Play Again";
//   nextButton.classList.remove("hide");
//   nextButton.style.display = "block";
// }


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




function  handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


// Initialize event listeners for starting quizzes
document.querySelectorAll('#start-quiz').forEach(button => {
  button.addEventListener('click', (event) => {
    e.preventDefault();
    const topic = event.target.closest('.card').querySelector('.card-title').innerText;
    startQuiz(topic);
  });
});


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
];*/