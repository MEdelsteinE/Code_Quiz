var scoreDisplay = document.querySelector('#score-output');
var scoreHistory = JSON.parse(localStorage.getItem('history')) || []

function displayScore() {

    for (var i = 0; i < scoreHistory.length; i++) {
        var liEl = document.createElement("li")
        liEl.textContent = scoreHistory[i].name + " - " + scoreHistory[i].time
        scoreDisplay.appendChild(liEl)
    }
}

displayScore();