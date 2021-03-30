var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var timeLeft = 75;
var hasGameStarted = false;

startButton.addEventListener("click", function(){
   startTime();
})

function startTime() {
    var timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            return;
        } 
        timeLeft--;
       timer.textContent = "Time Left: " + timeLeft;
       
    }, 1000)
}

function startGame () {
    hasGameStarted = true;
}