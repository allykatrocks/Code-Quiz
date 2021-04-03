# homework-code-quiz

For this week's assignment, we were tasked with creating a coding quiz from scratch, using HTML, CSS, and JavaScript components we've learned in class. I began where most people do: the HTML. I first wrote code for what would appear on the screen when the user first loaded up the quiz. Then I decided to make the parts of my code that contained the actual quiz and the completion screen hidden until the user initiated the quiz by hitting the start button. Once the quiz began, the welcome screen became hidden, the timer began, and the first question appeared onscreen. Below is the main HTML and JavaScript sequence for the start button:
[HTML Main](./images/html.png)
[Start Button JS](./images/button.png)

Once the start button is pressed, lots of JavaScript functions are set in motion, starting with the timer. The timer had to start at the beginning of the game, deduct time for incorrect answers, then either run out or stop when the user completed the game. In addition to the timer, the questions had to then be displayed onscreen and progress as the user answered them, as well as whether they answered correctly. Every incorrect answer deducted ten seconds from the remaining time. Here is the completed code for all three firing functions as well as the check answer function:
[JS Timer](./images/timer.png)
[JS Start Game](./images/game.png)
[JS Start Questions](./images/questions.png)
[JS Check Answers](./images/answer.png)

Lastly, I had to make sure that the code tracked the user's score and then allowed them to submit that score along with their initials to a highscore page that can be viewed at any time. I had to make secondary HTML,CSS, and JavaScript pages for the highscore page and had to make sure they were all linked back to the original code. So once the game ended, the user was directed to a completion screen where once they submitted their initials, they were redirected to the highscore page. Below is the end game function that performs this sequence:
[JS End Game](./images/end.png) 

The quiz is posted at this link: https://allykatrocks.github.io/homework-code-quiz/