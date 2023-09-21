// Selectors
var headerEl = document.querySelector('header');
var honeEl = document.querySelector('h1');
var instructions = document.querySelector('p');
var timeEL = document.querySelector('#time');
var showTimeEl = document.querySelector('.showTime')
var beginBtn = document.querySelector('#begin');
var questWrap = document.querySelector('.question-wrap');
var questionTextEl = document.querySelector('.question-wrap h2');
var choicesDiv = document.querySelector('.choices');
var answerAlert = document.querySelector('.answer-alert');
var scoreForm = document.querySelector('#score-form');
var scoreBtn = document.querySelector('#submit-score');
var nameEL = document.querySelector('#name');
// functional variables
var scoreHistory = JSON.parse(localStorage.getItem('history')) || []
var time = 60;
var questionIndex = 0;
var question;
var timer;

function beginGame() {

    beginBtn.classList.add('hide');
    questWrap.classList.remove('hide');
    instructions.classList.add('hide');
    honeEl.classList.add('hide');
    headerEl.classList.add('hide');
    counter();
    showQuestion();
}

function showQuestion() {
    question = questions[questionIndex];
    questionTextEl.innerText = question.question;

    choicesDiv.innerHTML = '';

    question.choices.forEach(function (choice) {

        var btn = document.createElement('button');
        btn.textContent = choice

        btn.onclick = checkAnswer;
        choicesDiv.appendChild(btn)
    });
}

function counter() {
    timer = setInterval(() => {
        if (time <= 0) {
            endGame()
        }

        time--
        timeEL.textContent = time
    }, 1000);
}

function checkAnswer(e) {
    var correctAnswer = questions[questionIndex].answer
    var correctClicked = e.target.textContent

    if (correctAnswer === correctClicked) {
        answerAlert.innerText = 'Right!';
    } else {
        answerAlert.innerText = 'Incorrect!';
        time -= 10;
    }

    answerAlert.classList.remove('hide');

    setTimeout(function () {
        answerAlert.classList.add('hide');

        questionIndex++;

        if (questionIndex === questions.length) {
            return endGame();
        }

        showQuestion();
    }, 1500);
}

beginBtn.addEventListener('click', beginGame);

//This moves the end of the game to the Enter Intials page
function endGame() {
    clearInterval(timer)
    questWrap.classList.add('hide');
    scoreForm.classList.remove('hide');

}
//This is s an event listener to store users score in local storage
scoreBtn.addEventListener('click', function () {
    var name = nameEL.value
    var newPlayer = { name, time }

    scoreHistory.push(newPlayer)

    localStorage.setItem('history', JSON.stringify(scoreHistory));
    window.location = './highscores.html';
});







