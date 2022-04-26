'use strict';
// Global variables
let secretNum = Math.floor(Math.random() * 21);
console.log(secretNum)
let score = 20;
let highscore = 0;
// ********* Selectors *********
const button = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const message = document.querySelector(".message");
const divNumber = document.querySelector(".number");
const scoreSpan = document.querySelector(".score");
const body = document.querySelector("body");
const playAgain = document.querySelector(".again")
const highscoreSpan = document.querySelector(".highscore")

// display secret number on webpage
const displayNumber = function() {
  divNumber.innerText = secretNum
}


// ******* Event Listener *********
button.addEventListener("click", function() {
    const guess = Number(guessInput.value)
    console.log(guess, typeof guess)
    // if guess has no value, returns false, so if block will run
    if(!guess) {
      message.textContent = "🚫 No number!"

      // when player wins
    } else if(guess === secretNum) {
      message.textContent = "🎉 Yay! You got it correct";
      // display the secret number
      divNumber.innerText = secretNum
      // change the background color of the body
      body.style.backgroundColor = "#60b347";
      // change number div
      divNumber.style.width = "30rem";

      // check if score is greater than high score
      if(score > highscore) {
        highscore = score;
      }
      // display the new high score
      highscoreSpan.innerText = highscore
    } else if(guess !== secretNum) {
      if(score > 1) {
        message.textContent = guess > secretNum ? "📈 Guess is too high!" : "📉 Guess is too low! Try again"

        // decrease the score
        score -= 1
        scoreSpan.innerText = score
      } else {
        message.textContent = "You lost the game!";
        scoreSpan.innerText = 0;
      }
    }
})

// play again button
playAgain.addEventListener("click", function() {
  // reset score back to initial value
  score = 20
  scoreSpan.textContent = score;
  // create a new secret number - reassing its value
  secretNum = Math.floor(Math.random() * 21);
  console.log(secretNum)
  // reset message
  message.textContent = "Start guessing..."
  // reset input value
  guessInput.value = ""
  // clear secret number
  divNumber.textContent = "?"
  divNumber.style.width = "15rem"
  // restore background color
  body.style.backgroundColor = "#222"
})
