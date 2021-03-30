var startMenuElement = document.querySelector("#start-menu");
var questionContainerElement = document.querySelector("#question-container");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var timeLeft = 75;
var hasGameStarted = false;
var questions = [
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "quotes", "parentheses", "curly brackets"],
        answer: "quotes"
    },
    
    {
        title: "The condition in an if/else statement is enclosed in ____.",
        options: ["square brackets", "parentheses", "curly brackets", "quotes"],
        answer: "parentheses"
    },

    {
        title: "Commonly used data types DO NOT include:",
        options: ["booleans", "numbers", "alerts", "strings"],
        answer: "alerts"
    },

    {
        title: "A very useful tool for use during development and debugging for printing content to the debugger is:",
        options: ["for loops", "JavaScript", "terminal/bash", "console.log"],
        answer: "console.log"
    },

    {
        title: "Arrays in JavaScript can be used to store ____.",
        options: ["booleans", "numbers and strings", "other arrays", "all of the above"],
        answer: "all of the above"
    }

];

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
    startMenuElement.setAttribute("class", "hidden");
    questionContainerElement.setAttribute("class", "visible");
}