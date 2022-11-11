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
    option1: "Zelda",
    option2: "Link",
    option3: "Ganon",
    option4: "Navi",
    answer: 2,
  },
  {
    question: "What year was the original Super Mario Bros. released for the Nintendo Entertainment System?",
    option1: "1985",
    option2: "1988",
    option3: "1990",
    option4: "1995",
    answer: 1,
  },
  {
    question: "How many Pokemon were there in Generation I?",
    option1: "101",
    option2: "121",
    option3: "151",
    option4: "201",
    answer: 3,
  },
  {
    question: "Who is the main character in the Metroid series?",
    option1: "Samus Aran",
    option2: "Star Fox",
    option3: "Captain Falcon",
    option4: "Marth",
    answer: 1,
  },
  {
    question: "As of Nov. 2022, what is the highest selling Nintendo game (units sold)?",
    option1: "Animal Crossing: New Horizons",
    option2: "Super Smash Bros. Ultimate",
    option3: "Super Mario Odyssey",
    option4: "Mario Kart 8 Deluxe",
    answer: 4,
  },
]