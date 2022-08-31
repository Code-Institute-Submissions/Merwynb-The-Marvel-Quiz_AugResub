const startButton = document.getElementById("start-quiz");
const gameArea = document.getElementById("game-area");
const questionElement = document.getElementById('question');
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreLabel = document.getElementById('score');
const quizLogo = document.getElementById("logo");
const quizBanner = document.getElementById("banner");
const quizTitle = document.getElementById("quiz-title")
const scoreArea = document.getElementById("score-area");
const tagline = document.getElementById("tagline");


let shuffledQuestion, currentQuestionIndex, score = 0;

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    answerElement.classList.remove('disable-element');
    scoreLabel.innerText = score;
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {

    // Hides and unhides logos and buttons and shuffles questions 
    answerElement.classList.remove('disable-element');
    startButton.classList.add('hide');
    tagline.classList.add('hide')
    quizBanner.classList.add('hide');
    scoreLabel.innerText = 0;
    shuffledQuestion = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    gameArea.classList.remove('hide');
    quizLogo.classList.remove('hide');
    quizTitle.classList.remove('hide');
    scoreArea.classList.remove('hide');
    setNextQuestion(); 
}

function setNextQuestion() {

    //Hides the next button and displays random question.
    nextButton.classList.add('hide');
    resetState();
    displayQuestion(shuffledQuestion[currentQuestionIndex]);
}

function displayQuestion(question) {

    //Displays questions set in const question on clicking start
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
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

    // Displays Answer choices and increments score if correct.
    // Shows Restart button after last question answered.
    // Resets Score to 0 on clicking Restart.
    const selectedLabel = e.target
    answerElement.classList.add('disable-element');
    selectedLabel.classList.add('disable-selected-element');
    const correct = selectedLabel.dataset.correct;
    if(correct) {
        score = score+10;
    }
    if(shuffledQuestion.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
        answerElement.classList.add('disabled')
    } else{
        startButton.innerText = 'Restart';
        scoreLabel.innerText = score;
        score = 0;
        startButton.classList.remove('hide');
        nextButton.classList.add('hide');
    }
    nextButton.classList.remove('.hide');
}

function resetState() {

    //Displays the text of the choice containers.
    nextButton.classList.add('.hide');
    while(answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
}

const question = [

    // Question and answers set with true and false values assigned.
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
    },
    {
        question: "Where is Captain America from?",
        answers:[
            {text: 'New York', correct: false},
            {text: 'Texas', correct: false},
            {text: 'Brooklyn', correct: true},
            {text: 'Seattle', correct: false}
        ]
    },
    {
        question: "What is Tony Stark's father's name?",
        answers:[
            {text: 'Newton Stark', correct: false},
            {text: 'Harry Stark', correct: false},
            {text: 'Henry Stark', correct: false},
            {text: 'Howard Stark', correct: true}
        ]
    },
    {
        question: "On what planet was the Soul Stone in Infinity War?",
        answers:[
            {text: 'Asgard', correct: false},
            {text: 'Vormir', correct: true},
            {text: 'Earth', correct: false},
            {text: 'Xander', correct: false}
        ]
    }
]
