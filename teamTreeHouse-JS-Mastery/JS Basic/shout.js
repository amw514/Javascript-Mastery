let msg = "What do you wanna say?";

let shout = "I love JavaScript";

let shoutMessage = `<h1>${msg} : \n${shout}</h1>`;

document.querySelector("main").innerHTML = shoutMessage;

let correctGuess = false;

let number = 6;

let guess = prompt("Guess number: ");

if (+guess === number) {
  correctGuess = true;
}

if (correctGuess) {
  console.log("Correct");
} else {
  console.log("false");
}
