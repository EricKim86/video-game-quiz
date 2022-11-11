var startButton = document.getElementById("start-game")

var questionBox = document.getElementById("question-box")

var currentQuestion

var score = document.querySelector(".scoreboard");

var timer = document.querySelector(".time");

var titleScreen = document.querySelector(".title");

var mainScreen = document.querySelector(".main");

var secondsLeft = 60;

startButton.addEventListener("click", startGame)

//start game
function startGame() {
  startButton.classList.add("hide")
  questionBox.classList.remove("hide")
  currentQuestion = 0
  nextQuestion()
}
//starting screen text
    score.textContent = "View High Scores";

// timer countdown

//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timer.textContent = "Time: " + secondsLeft;

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       mainScreen.textContent = "";
//       gameOverMessage();
//     }
//   }, 1000);
// }

// gameover message
// function gameOverMessage() {
//   timer.textContent = "";
//   titleScreen.textContent = "";
//   var gameOver = document.createElement("img");
//   gameOver.setAttribute("src", "assets/images/gameover-image.avif");
//   mainScreen.appendChild(gameOver);
// }

var questions = [
  {
    question: "Who is the main character in the Legend of Zelda series?",
    opetions: [
        {text: "Link", correct: true},
        {text: "Zelda", correct: false},
        {text: "Ganon", correct: false},
        {text: "Navi", correct: false},
    ]
  }
]