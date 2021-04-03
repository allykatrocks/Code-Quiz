var startMenuElement = document.querySelector("#start-menu");
var questionContainerElement = document.querySelector("#question-container");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var timeLeft = 75;
var timerInterval;
var hasGameStarted = false;
var questionElement = document.querySelector("#questions");
var answersElement = document.querySelector("#answer-buttons");
var gameIndex = 0;
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
var correctAnswerEl = document.querySelector("#correct");
var incorrectAnswerEl = document.querySelector("#incorrect"); 
var hasGameEnded = false;
var endGameElement = document.querySelector("#end-screen");
var initials = "";
var score = 0;
var highscoreList = JSON.parse(localStorage.getItem("highscore")) || [];

startButton.addEventListener("click", function(){
   startTime();
   startGame();
   startQuestions();
})

function startTime() {
    timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            hasGameEnded = true;
            document.getElementById("YourScore").textContent = "Your score is " + score;
            questionContainerElement.setAttribute("class", "hidden");
            endGameElement.setAttribute("class","visible");
             
        } 
        
       timer.textContent = "Time Left: " + timeLeft;
       
    }, 1000)
}

function startGame() {
    hasGameStarted = true;
    startMenuElement.setAttribute("class", "hidden");
    questionContainerElement.setAttribute("class", "visible");
}

function startQuestions() {
    questionElement.textContent = questions[gameIndex].title;
    answersElement.innerHTML = '';
    for (var i = 0; i < questions[gameIndex].options.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = questions[gameIndex].options[i];
        btn.onclick = checkAnswer;
        answersElement.append(btn)
    }
}

function checkAnswer() {
    if (this.textContent === questions[gameIndex].answer) {
        correctAnswerEl.setAttribute("class", "visible");
        setTimeout(function(){correctAnswerEl.setAttribute("class", "hidden")}, 250);
        score++;
    } else {
        incorrectAnswerEl.setAttribute("class", "visible");
        setTimeout(function(){incorrectAnswerEl.setAttribute("class", "hidden")}, 250);
        timeLeft -= 10;
    }
    gameIndex++;
    if (gameIndex > 4) {
        clearInterval(timerInterval);
        getInitials();
    } else {
        startQuestions();
    }
    
}
document.querySelector("#initials-submit").addEventListener("click", function() {
    initials = document.querySelector("#initials").value;
    endGame();
})

function getInitials() {
    document.getElementById("YourScore").textContent = "Your score is " + score;
    document.querySelector("#end-screen").classList.remove("hidden");
    questionContainerElement.setAttribute("class", "hidden");
}

function endGame() {
    hasGameEnded = true;
    endGameElement.setAttribute("class","visible");
    highscoreList.push({"initials": initials, "score": score});
    localStorage.setItem("highscore", JSON.stringify(highscoreList));

    window.location.assign("./highscores.html");
}
