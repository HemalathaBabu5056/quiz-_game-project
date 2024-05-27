const questionContainerElemet = document.getElementById
("question-container")




function showQuestion(question){
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
            if (answer.correct){
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonElement.appendChid(button)
})
    }



const questions = [
{
    question: 'What is my name?',
    answer : [
        {text: 'Hemalatha', correct: true},
        {text: 'Hema', correct: false},
        {text: 'Koushi', correct :false},
        {text: 'Koushika', correct: false}
    ]
}

]

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')

}else{
    element.classList.add('wrong')
}
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}