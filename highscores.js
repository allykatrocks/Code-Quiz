var data = JSON.parse(localStorage.getItem("highscore"));

data.forEach(element => {
    var tableElement = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = element.initials;
    var td2 = document.createElement("td");
    td2.textContent = element.score;

    tableElement.appendChild(td1);
    tableElement.appendChild(td2);

    document.getElementById("HighScoresTable").appendChild(tableElement);
});

// get test to end when time runs out
// get timer to stop at 0 not -1
// use something other than alerts for correct/incorrect answers
// fix css on 1, 3, & 4
