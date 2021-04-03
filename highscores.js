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





