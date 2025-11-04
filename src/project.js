// Simple Number Guessing Game

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user for a guess
let guess = prompt("Guess a number between 1 and 10:");

// Keep asking until the user guesses correctly
while (parseInt(guess) !== secretNumber) {
  if (guess < secretNumber) {
    guess = prompt("Too low! Try again:");
  } else {
    guess = prompt("Too high! Try again:");
  }
}

// Congratulate the user
alert("🎉 Correct! The number was " + secretNumber);
