'use strict';
// Global variables
const secretNum = Math.floor(Math.random() * 21);
console.log(secretNum)
let score = 0;
// ********* Selectors *********
const button = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const message = document.querySelector(".message");
const divNumber = document.querySelector(".number");
const scoreSpan = document.querySelector(".score")

// display secret number on webpage
const displayNumber = function() {
  divNumber.innerText = secretNum
}
displayNumber();

// ******* Event Listener *********
button.addEventListener("click", function() {
    const guess = Number(guessInput.value)
    console.log(guess, typeof guess)
    // if guess has no value, returns false, so if block will run
    if(!guess) {
      message.textContent = "🚫 No number!"
    } else if(guess === secretNum) {
      message.textContent = "🎉 Yay! You got it correct";
      // update score - increment
      score += 1
      // update span score element in DOM
      scoreSpan.innerText = score
    } else if(guess > secretNum) {
      message.textContent = "📈 Guess is too high!"
      // decrease score
      score -= 1
      scoreSpan.innerText = score
    } else if (guess < secretNum) {
      message.textContent = "📉 Guess is too low! Try again"
      // decrease score
    }
})

