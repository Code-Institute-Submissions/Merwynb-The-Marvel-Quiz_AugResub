
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            let questionType = this.getAttribute('data-type');
            runGame('questionType');
        })
    }

    runGame('question1');
})

function runGame(questionType) {

    if (questionType === 'question1') {
        displayQuestion1();
    } else {
        alert(`Unknown question type: ${questionType}`);
        throw `Unknown question type ${questionType}.Aborting!`;
    }

}

function checkAnswer() {

}

function incrementScore() {

}

function displayQuestion1(question1, choice1, choice2, choice3) {

    document.getElementById('question1').textContent = 'Who Plays Iron Man?';
    document.getElementById('johnny').textContent = 'Johnny Depp';
    document.getElementById('robert').textContent = 'Robert Downey Jr.';
    document.getElementById('brad').textContent = 'Brad Pitt';
    


}

function displayQuestion2() {

}

function displayQuestion3() {
    
}