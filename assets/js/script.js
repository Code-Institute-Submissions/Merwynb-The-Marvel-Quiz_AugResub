
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let questionType = this.getAttribute("data-type");
                runGame(questionType);
            }
        });
    }
    runGame("question1");
});

function runGame(questionType) {
    if (questionType === 'question1') {
        displayQuestion('Who Plays Iron Man?','Johnny Depp','Robert Downey Jr.','Brad Pitt');  
    } else if (questionType === 'question2') {
        displayQuestion('How many Infinity Stones are there?','Five','Six','Eight');
    } else if (questionType === 'question3') {
        displayQuestion("Who was able to pick Thor's hammer in End Game?",'Spider Man','Hulk','Captain America');
    } else {
        alert(`Unknown question type: ${questionType}`);
        throw `Unknown question type ${questionType}.Aborting!`;
    }
}

function checkAnswer() {
    var score = 0;
    if((document.getElementsByTagName("button")[0].getAttribute("data-type") == "question1") && (document.getElementById('choice2').textContent=="Robert Downey Jr.")){
        console.log("Correct Answer1");
        score = incrementScore(score);
    }
    
    if((document.getElementsByTagName("button")[1].getAttribute("data-type") == "question2") && (document.getElementById('choice2').textContent=="Six")){
        console.log("Correct Answer2");
        score = incrementScore(score);
    }

    if((document.getElementsByTagName("button")[2].getAttribute("data-type") == "question3") && (document.getElementById('choice3').textContent=="Captain America")){
        console.log("Correct Answer3");
        score = incrementScore(score);
    }
    console.log("Score"+score);
}

function incrementScore(score) {
    score++;
    return score;
}

function displayQuestion(question, choice1, choice2, choice3) {
    document.getElementById('question').textContent = question;
    document.getElementById('choice1').textContent = choice1;
    document.getElementById('choice2').textContent = choice2;
    document.getElementById('choice3').textContent = choice3;
}