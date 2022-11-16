//main screen
var startButton = document.getElementById("start-game");
var questionBox = document.getElementById("question-box");
var welecomeMessage = document.getElementById("welcome-message");
var gameOver = document.getElementById("game-over");
var instructions = document.getElementById("instructions");
var tryAgain = document.getElementById("try-again");

//scoreboard and timer
var secondsLeft = 61;
var score = document.getElementById("scoreboard");
var timer = document.getElementById("time");
var titleScreen = document.getElementById("title");
var mainScreen = document.getElementById("main");
var highScoreMessage = document.getElementById("high-score");
var highScoreBoard = document.getElementById("high-score-board");
var scoreContent = document.getElementById("score-content")
var playerScore = document.createElement("p");
var finishedCorrect = document.getElementById("finished-correct");
var finishedIncorrect = document.getElementById("finished-incorrect");
var submitScore = document.getElementById("submit-score");
var initial = document.getElementById("initial");
var enterInitial = document.getElementById("enter-initial")

//questions and answers
var choices = document.querySelectorAll(".choice-text");
var questionSelect = document.getElementById("question");
var correctAnswer = document.getElementById("correct");
var incorrectAnswer = document.getElementById("incorrect");
var nextButtonCorrect = document.getElementById("next-button-correct");
var nextButtonIncorrect = document.getElementById("next-button-incorrect");
var savedScoresArray = JSON.parse(localStorage.getItem('savedScores')) || [];

// question list 0-4
var question1 = {
  title: "Who is the main character in the Legend of Zelda series?",
  options: ["Zelda", "Link", "Ganon", "Navi"],
  answer: 1,
};
var question2 = {
  title: "What year was the original Super Mario Bros. released for the Nintendo Entertainment System?",
  options: ["1985", "1988", "1990", "1995"],
  answer: 0,
};
var question3 = {
  title: "How many Pokemon were there in Generation I?",
  options: ["101", "121", "151", "201"],
  answer: 2,
};
var question4 = {
  title: "Who is the main character in the Metroid series?",
  options: ["Samus Aran", "Star Fox", "Captain Falcon", "Marth"],
  answer: 0,
};
var question5 = {
  title: "As of Nov. 2022, what is the highest selling Nintendo game (units sold)?",
  options: ["Animal Crossing: New Horizons", "Super Smash Bros. Ultimate", "Super Mario Odyssey", "Mario Kart 8 Deluxe"],
  answer: 3,
};

function gameScreenCorrect() {
  correctAnswer.textContent = "Correct!";
  correctAnswer.classList.remove("hide");
  incorrectAnswer.classList.add("hide");
  nextButtonCorrect.classList.remove("hide");
  nextButtonIncorrect.classList.add("hide");
  questionBox.classList.add("hide");
};

function gameScreenIncorrect() {
  incorrectAnswer.textContent = "Incorrect! -10 HP!";
  incorrectAnswer.classList.remove("hide");
  correctAnswer.classList.add("hide");
  nextButtonIncorrect.classList.remove("hide");
  nextButtonCorrect.classList.add("hide");
  questionBox.classList.add("hide");
};

function questionClear() {
  questionBox.classList.remove("hide");
  correctAnswer.classList.add("hide");
  incorrectAnswer.classList.add("hide");
  nextButtonCorrect.classList.add("hide");
  nextButtonIncorrect.classList.add("hide");
};

function clearEverything() {
  highScoreBoard.classList.add("hide");
  gameOver.classList.add("hide");
  startButton.classList.add("hide");
  welecomeMessage.classList.add("hide");
  instructions.classList.add("hide");
  incorrectAnswer.classList.add("hide");
  nextButtonCorrect.classList.add("hide");
  nextButtonIncorrect.classList.add("hide");
  questionBox.classList.add("hide");
  correctAnswer.classList.add("hide");
  incorrectAnswer.classList.add("hide");
  finishedCorrect.classList.add("hide");
  finishedIncorrect.classList.add("hide");
  submitScore.classList.add("hide");
  highScoreMessage.classList.add("hide")
  enterInitial.classList.add("hide")
  scoreContent.classList.add("hide")

};

//deduction of time from main timer

function deductPoints() {
  secondsLeft -= 10;
};

//storing inital and score(time) in local storage


submitScore.addEventListener("click", function (event) {
  event.preventDefault();

  var highscoreList = {
    initial: initial.value,
    score: secondsLeft,
  };

  savedScoresArray.push(highscoreList);
  localStorage.setItem("savedScores", JSON.stringify(savedScoresArray));
  
});

// timer countdown - tick tock!
function startTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "HP: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOverMessage();
    }
    finishedCorrect.addEventListener("click", function () {
      clearInterval(timerInterval);
    })
    finishedIncorrect.addEventListener("click", function () {
      clearInterval(timerInterval);
    })
    score.addEventListener("click", function () {
      clearInterval(timerInterval);
    })
  }, 1000);
};

function resetQuiz() {
  window.location.reload();
};

//start game
function startGame() {
  clearEverything();
  score.classList.remove("hide");
  questionBox.classList.remove("hide");
  startTime();
  firstQuestion();
};

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

  nextButtonCorrect.addEventListener("click", nextQuestion);
  nextButtonIncorrect.addEventListener("click", nextQuestion);
};

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
  nextButtonCorrect.addEventListener("click", nextQuestion3);
  nextButtonIncorrect.addEventListener("click", nextQuestion3);
};

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
  nextButtonCorrect.addEventListener("click", nextQuestion4);
  nextButtonIncorrect.addEventListener("click", nextQuestion4);
};

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
  nextButtonCorrect.addEventListener("click", nextQuestion5);
  nextButtonIncorrect.addEventListener("click", nextQuestion5);
};

//question 5
function nextQuestion5() {
  questionClear();
  questionSelect.textContent = question5.title;
  choices.forEach(function (element, index) {
    element.textContent = question5.options[index];

    element.addEventListener("click", function () {
      if (question5.answer == index) {
        gameScreenCorrect();
        finishedCorrect.classList.remove("hide");
        nextButtonCorrect.classList.add("hide");
        nextButtonIncorrect.classList.add("hide");
      } else {
        gameScreenIncorrect();
        finishedIncorrect.classList.remove("hide");
        nextButtonCorrect.classList.add("hide");
        nextButtonIncorrect.classList.add("hide");
      }
    });
  });
  finishedCorrect.addEventListener("click", highScore);
  finishedIncorrect.addEventListener("click", highScore);
};

function highScoreClick() {
  clearEverything();
  timer.classList.add("hide");
  tryAgain.classList.remove("hide");
  highScoreBoard.classList.remove("hide");
  tryAgain.addEventListener("click", resetQuiz);
  scoreContent.classList.remove("hide")
  var updatedScoreList = JSON.parse(localStorage.getItem("savedScores"));
  updatedScoreList.sort((a,b) => {
    return b.score - a.score;
  });
  if (updatedScoreList) {
    updatedScoreList.map((savedScoreObj, index) => {
      var listItem = document.createElement('li');
      listItem.innerHTML = `<span>Initial: ${savedScoreObj.initial} | Score: ${savedScoreObj.score}</span>`
      document.querySelector("#score-content > ul").append(listItem);
    })
  }
};

//highscore
function highScore() {
  clearEverything();
  highScoreMessage.classList.remove("hide");
  playerScore.textContent = "Your score: " + secondsLeft;
  highScoreMessage.setAttribute("style", "color: rgb(70, 105, 219);");
  highScoreMessage.appendChild(playerScore);
  submitScore.classList.remove("hide");
  enterInitial.classList.remove("hide")
  submitScore.addEventListener("click", highScoreClick);
};

// gameover message
function gameOverMessage() {
  clearEverything();
  gameOver.classList.remove("hide");
  tryAgain.classList.remove("hide");
  highScoreMessage.classList.add("hide");
  tryAgain.addEventListener("click", resetQuiz);
};

startButton.addEventListener("click", startGame);
score.addEventListener("click", highScoreClick);
nextButtonIncorrect.addEventListener("click", deductPoints);
finishedIncorrect.addEventListener("click", deductPoints);