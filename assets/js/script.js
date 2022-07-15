const startButton = document.getElementById("start-quiz");
const gameArea = document.getElementById("game-area");
const questionElement = document.getElementById('question');
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex, score = 0;

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide');
    gameArea.classList.remove('hide');
    setNextQuestion(); 
}

function setNextQuestion() {
    resetState();
    displayQuestion(currentQuestionIndex);
}

function displayQuestion() {
    questionElement.innerText = question[0].question;
    question[0].answers.forEach(answer => {
        const label = document.createElement('label')
        label.innerText = answer.text;
        label.classList.add('choice-container')
        if(answer.correct) {
            label.dataset.correct = answer.correct;
        }
        label.addEventListener('click', selectAnswer)
        answerElement.appendChild(label);
    })

}

function selectAnswer(e) {
    const selectedLabel = e.target
    const correct = selectedLabel.dataset.correct
    if(correct) {
        score = score+10;
    }
    // Array.from(answerElement.children).forEach(label => {
    //     setStatusClass(label, label.dataset.correct)
    // }) 
    nextButton.classList.remove('.hide');
}

function resetState() {
    nextButton.classList.add('.hide');
    while(answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if(correct) {
//         element.
//     }

// }

const question = [
    {
        question: 'Who Plays Iron Man?',
        answers:[
            {text: 'Johnny Depp', correct: false},
            {text: 'Robert Downey Jr.', correct: true},
            {text: 'Brad Pitt', correct: false},
            {text: 'Gokul Babu', correct: false}
        ]
    },
    {
        question: 'How many Infinity Stones are there?',
        answers:[
            {text: 'Five', correct: false},
            {text: 'Six', correct: true},
            {text: 'Eight', correct: false},
            {text: 'Infinity', correct: false}
        ]
    },
    {
        question: "Who was able to pick Thor's hammer in End Game?",
        answers:[
            {text: 'Captain America', correct: true},
            {text: 'Hulk', correct: false},
            {text: 'Joey tribbiani', correct: false},
            {text: 'Spider Man', correct: false}
        ]
    }
]


// document.addEventListener("DOMContentLoaded", function() {
//     // let buttons = document.getElementsByTagName("button");
//     // for (let button of buttons) {
//         runGame("question1");
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "submit") {
//                 checkAnswer();
//             }
//             // } else {
//             //     let questionType = this.getAttribute("data-type");
//             //     checkAnswer();
//             //     runGame(questionType);
//             // }
//         });
//     // }
//     runGame("question1");
// });

// function runGame(questionType) {
//     if (questionType === 'question1') {
//         displayQuestion('Who Plays Iron Man?','Johnny Depp','Robert Downey Jr.','Brad Pitt');  
//     } else if (questionType === 'question2') {
//         displayQuestion('How many Infinity Stones are there?','Five','Six','Eight');
//     } else if (questionType === 'question3') {
//         displayQuestion("Who was able to pick Thor's hammer in End Game?",'Spider Man','Hulk','Captain America');
//     } else {
//         alert(`Unknown question type: ${questionType}`);
//         throw `Unknown question type ${questionType}.Aborting!`;
//     }
// }

// function checkAnswer() {
   
//    var score = 0;
//     if((document.getElementsByTagName("button")[0].getAttribute("data-type") == "question1") && (document.getElementById('choice2').textContent=="Robert Downey Jr.")){
//         console.log("Correct Answer1");
//         score = incrementScore(score);
//     }
//     console.log("*************"+document.querySelectorAll('input[name="radios"]')[0].value);
//     if((document.getElementsByTagName("button")[1].getAttribute("data-type") == "question2") && (document.getElementById('choice2').textContent=="Six")){
//         console.log("Correct Answer2");
//         score = incrementScore(score);
//     }

//     if((document.getElementsByTagName("button")[2].getAttribute("data-type") == "question3") && (document.getElementById('choice3').textContent=="Captain America")){
//         console.log("Correct Answer3");
//         score = incrementScore(score);
//     }
//     document.getElementById('score').textContent = score;
//     console.log("Score"+score);
// }

// function incrementScore(score) {
//     score = score+10;
//     return score;
// }

// function displayQuestion(question, choice1, choice2, choice3) {
//     document.getElementById('question').textContent = question;
//     document.getElementById('choice1').textContent = choice1;
//     document.getElementById('choice2').textContent = choice2;
//     document.getElementById('choice3').textContent = choice3;
// }