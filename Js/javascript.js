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
var time = 60;
var questionIndex = 0;
var question;
var timer;

function beginGame() {
    // showTimeEl.classList.remove('hide');
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
        //choicesDiv.insertAdjacentHTML('beforeend', '<button class="">' + choice + '</button>');
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
//choicesDiv.addEventListener('click', checkAnswer)

// function displayLeadeboard() {
//     localStorage.setItem('score', time);
//     window.location = './highscores.html';

// }

function endGame() {
    clearInterval(timer)
    //need to make score form appear
    
}






