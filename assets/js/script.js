//main screen
var startButton = document.getElementById("start-game")
var questionBox = document.getElementById("question-box")
var welecomeMessage = document.getElementById("welcome-message")
var gameOver = document.getElementById("game-over")
var instructions = document.getElementById("instructions")

//scoreboard, exp progress bar, and timer
var secondsLeft = 60
var score = document.getElementById("scoreboard")
var timer = document.getElementById("time")
var titleScreen = document.getElementById("title")
var mainScreen = document.getElementById("main")
var highScoreMessage = document.getElementById("high-score")
var highScoreBoard = document.getElementById("high-score-board")
var playerScore = document.createElement("p")
var finished = document.getElementById("finished")
var submitForm = document.getElementById("submit")

//questions and answers
var choices = document.querySelectorAll(".choice-text")
var questionSelect = document.getElementById("question")
var correctAnswer = document.getElementById("correct")
var incorrectAnswer = document.getElementById("incorrect")
var nextButton = document.getElementById("next-button")


// question list 0-4
var question1 = {
  title: "Who is the main character in the Legend of Zelda series?",
  options: ["Zelda", "Link", "Ganon", "Navi"],
  answer: 1,
}
var question2 = {
  title: "What year was the original Super Mario Bros. released for the Nintendo Entertainment System?",
  options: ["1985", "1988", "1990", "1995"],
  answer: 0,
}
var question3 = {
  title: "How many Pokemon were there in Generation I?",
  options: ["101", "121", "151", "201"],
  answer: 2,
}
var question4 = {
  title: "Who is the main character in the Metroid series?",
  options: ["Samus Aran", "Star Fox", "Captain Falcon", "Marth"],
  answer: 0,
}
var question5 = {
  title: "As of Nov. 2022, what is the highest selling Nintendo game (units sold)?",
  options: ["Animal Crossing: New Horizons", "Super Smash Bros. Ultimate", "Super Mario Odyssey", "Mario Kart 8 Deluxe"],
  answer: 3,
}

function gameScreenCorrect() {
  correctAnswer.textContent = "Correct!";
  correctAnswer.classList.remove("hide")
  incorrectAnswer.classList.add("hide")
  nextButton.classList.remove("hide")
  questionBox.classList.add("hide")
}

function gameScreenIncorrect() {
  incorrectAnswer.textContent = "Incorrect! -5 HP!";
  incorrectAnswer.classList.remove("hide")
  correctAnswer.classList.add("hide")
  nextButton.classList.remove("hide")
  questionBox.classList.add("hide")
}

function questionClear() {
  questionBox.classList.remove("hide")
  correctAnswer.classList.add("hide")
  incorrectAnswer.classList.add("hide")
  nextButton.classList.add("hide")
}

function clearEverything() {
  gameOver.classList.add("hide")
  startButton.classList.add("hide")
  welecomeMessage.classList.add("hide")
  instructions.classList.add("hide")
  nextButton.classList.add("hide")
  questionBox.classList.add("hide")
  correctAnswer.classList.add("hide")
  incorrectAnswer.classList.add("hide")
  finished.classList.add("hide")
  submitForm.classList.add("hide")
}

 // timer countdown - tick tock!
 function startTime () {
 var timerInterval = setInterval(function () {
  secondsLeft--;
  timer.textContent = "HP: " + secondsLeft;

  if (secondsLeft <= 0) {
    clearInterval(timerInterval);
    gameOverMessage();
  }
  finished.addEventListener("click", function() {
    clearInterval(timerInterval);
})
}, 1000);
}

function stopTime () {
  clearInterval(timerInterval);
}

//start game
function startGame() {
  clearEverything();
  score.classList.remove("hide")
  questionBox.classList.remove("hide")
  startTime();
  firstQuestion();
}

//question 1
function firstQuestion() {
  questionSelect.textContent = question1.title;
  choices.forEach(function (element, index) {
    element.textContent = question1.options[index];

    element.addEventListener("click", function () {
      if (question1.answer == index) {
        gameScreenCorrect();
      } else {
        gameScreenIncorrect();
      }
    });
  });
  nextButton.addEventListener("click", nextQuestion)
}

//question 2
function nextQuestion() {
  questionClear();
  questionSelect.textContent = question2.title;
  choices.forEach(function (element, index) {
    element.textContent = question2.options[index];

    element.addEventListener("click", function () {
      if (question2.answer == index) {
        gameScreenCorrect();
      } else {
        gameScreenIncorrect();
      }
    });
  });
  nextButton.addEventListener("click", nextQuestion3)
}

//question 3
function nextQuestion3() {
  questionClear();
  questionSelect.textContent = question3.title;
  choices.forEach(function (element, index) {
    element.textContent = question3.options[index];

    element.addEventListener("click", function () {
      if (question3.answer == index) {
        gameScreenCorrect();
      } else {
        gameScreenIncorrect();
      }
    });
  });
  nextButton.addEventListener("click", nextQuestion4)
}

//question 4
function nextQuestion4() {
  questionClear();
  questionSelect.textContent = question4.title;
  choices.forEach(function (element, index) {
    element.textContent = question4.options[index];

    element.addEventListener("click", function () {
      if (question4.answer == index) {
        gameScreenCorrect();
      } else {
        gameScreenIncorrect();
      }
    });
  });
  nextButton.addEventListener("click", nextQuestion5)
}

//question 5
function nextQuestion5() {
  questionClear();
  questionSelect.textContent = question5.title;
  choices.forEach(function (element, index) {
    element.textContent = question5.options[index];

    element.addEventListener("click", function () {
      if (question5.answer == index) {
        gameScreenCorrect();
        finished.classList.remove("hide")
        nextButton.classList.add("hide")
      } else {
        gameScreenIncorrect();
        finished.classList.remove("hide")
        nextButton.classList.add("hide")
      }
    });
  });
  finished.addEventListener("click", highScore)
}



//highscore
function highScore() {
  clearEverything();
  highScoreMessage.classList.remove("hide")
  playerScore.textContent = "Your score: PLACEHOLDER"
  highScoreMessage.setAttribute("style", "color: rgb(70, 105, 219);")
  highScoreMessage.appendChild(playerScore)
  submitForm.classList.remove("hide")
}

// gameover message
function gameOverMessage() {
  clearEverything()
  gameOver.classList.remove("hide")
  startButton.classList.remove("hide")
  highScoreMessage.classList.add("hide")
}

startButton.addEventListener("click", startGame)