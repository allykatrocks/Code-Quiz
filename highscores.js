var data = JSON.parse(localStorage.getItem("highscore"));

data.forEach(element => {
    console.log(element);
    console.log(element.initials);
    var tableElement = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = element.initials;
    var td2 = document.createElement("td");
    td2.textContent = element.score;

    tableElement.appendChild(td1);
    tableElement.appendChild(td2);

    document.getElementById("HighScoresTable").appendChild(tableElement);
});

// get this to sync with the user's initials and score
// also get this screen to pop up after user's initials are completed
// use something other than alerts for correct/incorrect answers
