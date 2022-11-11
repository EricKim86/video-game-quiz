
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

var correctAnswer = document.getElementById("correct")

var incorrectAnswer = document.getElementById("incorrect")

var nextButton = document.getElementById("next-button")

startButton.addEventListener("click", startGame)

//starting screen text
score.textContent = "View High Scores";

//question list 0-4
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
  var question4= {
    title: "Who is the main character in the Metroid series?",
    options: ["Samus Aran", "Star Fox", "Captain Falcon", "Marth"],
    answer: 0,
  }
  var question5 = {
    title: "As of Nov. 2022, what is the highest selling Nintendo game (units sold)?",
    options: ["Animal Crossing: New Horizons", "Super Smash Bros. Ultimate", "Super Mario Odyssey", "Mario Kart 8 Deluxe"],
    answer: 3,
  }


//start game
function startGame() {
  questionSelect.textContent = question1.title;
  choices.forEach(function(element, index) {
      element.textContent = question1.options[index];

      element.addEventListener("click", function() {
        if(question1.answer == index) {
          correctAnswer.textContent = "Correct!";
          correctAnswer.classList.remove("hide")
          incorrectAnswer.classList.add("hide")
          nextButton.classList.remove("hide")
        } else {
          console.log("Incorrect!");
          incorrectAnswer.textContent = "Incorrect! -10 seconds";
          incorrectAnswer.classList.remove("hide")
          correctAnswer.classList.add("hide")
          nextButton.classList.remove("hide")
        }
        });
      });
      nextButton.addEventListener("click", nextQuestion)

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

function nextQuestion() {
//clear the page for the next question
  correctAnswer.classList.add("hide")
  incorrectAnswer.classList.add("hide")
  nextButton.classList.add("hide")

//next question
  questionSelect.textContent = question2.title;
  choices.forEach(function(element, index) {
      element.textContent = question2.options[index];

      element.addEventListener("click", function() {
        if(question2.answer == index) {
          correctAnswer.textContent = "Correct!";
          correctAnswer.classList.remove("hide")
          incorrectAnswer.classList.add("hide")
          nextButton.classList.remove("hide")
        } else {
          console.log("Incorrect!");
          incorrectAnswer.textContent = "Incorrect! -10 seconds";
          incorrectAnswer.classList.remove("hide")
          correctAnswer.classList.add("hide")
          nextButton.classList.remove("hide")
        }
        });
      });
      nextButton.addEventListener("click", nextQuestion)
}

// gameover message
// function gameOverMessage() {
//   timer.textContent = "";
//   titleScreen.textContent = "";
//   var gameOver = document.createElement("img");
//   gameOver.setAttribute("src", "assets/images/gameover-image.avif");
//   mainScreen.appendChild(gameOver);
// }
