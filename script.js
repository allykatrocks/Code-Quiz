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

startButton.addEventListener("click", function(){
   startTime();
   startGame();
   startQuestions();
})

function startTime() {
    timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // run end game function
        } 
        timeLeft--;
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
        alert("Correct!");
        // use something else
    } else {
        alert("Incorrect!");
        // use something else
        timeLeft -= 10;
    }
    console.log(this.textContent)
    console.log("button clicked")
    gameIndex++;
    if (gameIndex > 4) {
        //run end game function
        clearInterval(timerInterval);
        console.log("Game over");
    } else {
        startQuestions();
    }
    
}

function endGame() {
    // end the game
}
