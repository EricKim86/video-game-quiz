var score = document.querySelector(".scoreboard");

var timer = document.querySelector(".time");

var titleScreen = document.querySelector(".title");

var mainScreen = document.querySelector(".main");

var secondsLeft = 60;

//timer countdonw
function setTime() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      mainScreen.textContent = "";
      gameOverMessage();
    }
  }, 1000);
}

//starting screen text
    score.textContent = "View High Scores";
    titleScreen.textContent = "Video Game Quiz:"
    mainScreen.textContent = "Can you answer five video game related questions under 60 seconds?  Click Start Quiz to find out!";

//Setting styles
    

//gameover message
function gameOverMessage() {
  timer.textContent = "";
  titleScreen.textContent = "";
  var gameOver = document.createElement("img");
  gameOver.setAttribute("src", "assets/images/gameover-image.avif");
  mainScreen.appendChild(gameOver);

}

setTime();