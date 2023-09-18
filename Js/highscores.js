var scoreDisplay = document.querySelector('#score-output');
var form = document.querySelector('#score-form');
var score = localStorage.getItem('score');

function displayScore() {
    
    scoreDisplay.innerText = 'Your Score:' + score;

    function saveLeaderboard() {
        var nameInput = document.querySelector('#name');
        var name = nameInput.value;

        function getHighScores() {
            return JSON.parse(localStorage.getItem('highscores')) || [];
        }

        var highscores = getHighScores();

        highscores.push({
            name: name,
            score: score
    })
    
    localStorage.setItem('highscores', JSON.stringify(highscores));

    }

    displayScore();
    form.addEventListener('submit', saveLeaderboard)
}