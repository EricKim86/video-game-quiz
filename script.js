var score = document.querySelector(".scoreboard");

var timer = document.querySelector(".time");

var titleScreen = document.querySelector(".title");

var mainScreen = document.querySelector(".main");

var secondsLeft = 10;

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
    titleScreen.textContent = "Video Game Quiz;"
    mainScreen.textContent = "Can you answer five video game related questions under 60 seconds?  Click Start Quiz to find out!";

//Setting styles
score.setAttribute("style", "color:blue; text-align:left; font-size:20px; font-family:impact;")
timer.setAttribute("style", "color:blue; text-align:right; font-size:20px; font-family:impact;")
titleScreen.setAttribute("style", "color:blue; text-align:center; font-size:35px; font-family:impact;")
mainScreen.setAttribute("style", "color:black; text-align:center; font-size:20px; font-family:impact;")
    

//gameover message
function gameOverMessage() {
  timer.textContent = "";
  var gameOver = document.createElement("img");
  gameOver.setAttribute("src", "assets/images/gameover-image.avif");
  mainScreen.appendChild(gameOver);

}

setTime();