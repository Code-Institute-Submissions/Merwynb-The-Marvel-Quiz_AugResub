
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
        displayQuestion('How many Infinity Stones are there?','5','6.','8');
    } else if (questionType === 'question3') {
        displayQuestion("Who was able to pick Thor's hammer in End Game?",'Spider Man','Hulk','Captain America');
    } else {
        alert(`Unknown question type: ${questionType}`);
        throw `Unknown question type ${questionType}.Aborting!`;
    }
}

function checkAnswer() {
    console.log("Inside checkAnswer");
}

function incrementScore() {

}

function displayQuestion(question, choice1, choice2, choice3) {
    document.getElementById('question').textContent = question;
    document.getElementById('choice1').textContent = choice1;
    document.getElementById('choice2').textContent = choice2;
    document.getElementById('choice3').textContent = choice3;
}