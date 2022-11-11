
//main screen
var startButton = document.getElementById("start-game")

var questionBox = document.getElementById("question-box")

var welecomeMessage = document.getElementById("welcome-message")

//score and timer

var score = document.querySelector(".scoreboard")

var timer = document.querySelector(".time")

var secondsLeft = 60;

var titleScreen = document.querySelector(".title")

var mainScreen = document.querySelector(".main")

//questions and answers

var choices = document.querySelectorAll(".choice-text")

var questionSelect = document.getElementById("question")

startButton.addEventListener("click", startGame)

//starting screen text
score.textContent = "View High Scores";

//question list 0-4
var questions = {
    title: "Who is the main character in the Legend of Zelda series?",
    options: ["Zelda", "Link", "Ganon", "navi",], 
    answer: 1,
  };
  // {
  //   title: "What year was the original Super Mario Bros. released for the Nintendo Entertainment System?",
  //   option: ["1985", "1988", "1990", "1995",]
  //   answer: 0,
  // },
  // {
  //   title: "How many Pokemon were there in Generation I?",
  //   option: ["101", "121", "151", "201",]
  //   answer: 2,
  // },
  // {
  //   title: "Who is the main character in the Metroid series?",
  //   option: "Samus Aran", "Star Fox", "Captain Falcon", "Marth"]
  //   answer: 0,
  // },
  // {
  //   title: "As of Nov. 2022, what is the highest selling Nintendo game (units sold)?",
  //   option: "Animal Crossing: New Horizons", "Super Smash Bros. Ultimate", "Super Mario Odyssey", "Mario Kart 8 Deluxe",]
  //   answer: 3,
  // },

//start game
function startGame() {
  questionSelect.textContent = questions.title;
  choices.forEach(function(element, index) {
      element.textContent = questions.options[index];

      element.addEventListener("click", function() {
        if(questions.answer == index) {
          console.log("Correct!");
        } else {
          console.log("Incorrect!");
        }
        });
      });
// timer countdown - tick tock!
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
  
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
       mainScreen.textContent = "";
      gameOverMessage();
    }
  }, 1000);
// hide start button and welcome message

  startButton.classList.add("hide")
  welecomeMessage.classList.add("hide")
  questionBox.classList.remove("hide")
}

// gameover message
// function gameOverMessage() {
//   timer.textContent = "";
//   titleScreen.textContent = "";
//   var gameOver = document.createElement("img");
//   gameOver.setAttribute("src", "assets/images/gameover-image.avif");
//   mainScreen.appendChild(gameOver);
// }
