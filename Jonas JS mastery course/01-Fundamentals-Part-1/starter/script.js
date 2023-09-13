////////////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = "USA";
let continent = "Asia";
let population = 230000000;

// console.log(country);
// console.log(continent);
// console.log(population);

////////////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let isIsland = true;

let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof null);

////////////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese

let halfPopulation = population / 2;
// console.log(halfPopulation);

population++;
// console.log(population);

let finlandPopulation = 6000000;
// console.log(population > finlandPopulation);

let averagePopulation = 33000000;
// console.log(population < averagePopulation);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

////////////////////////////////////////////////////////////////////////////////////////////////

//* CHALLENGE #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

//     Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

//     Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

//     Log the value of BMIMark and BMIJohn to the console.

//     BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark);
// console.log(BMIJohn);
// console.log(markHigherBMI);

////////////////////////////////////////////////////////////////////////////////////////////////

let job = "Software Engineer";

let age = 20;

let newDescription = `I am Alee from ${country}. I am ${age} years old.`;

// console.log(newDescription);

if (age >= 18) {
  console.log(`Yeah this man is adult now`);
} else {
  console.log(`You are just a kid`);
}

////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${BMIMark.toFixed(
      2
    )}) is higher than John's (${BMIJohn.toFixed(2)})`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn.toFixed(
      2
    )}) is higher than Mark's (${BMIMark.toFixed(2)})`
  );
}

////////////////////////////////////////////////////////////////

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let scoreDolphins = (96 + 108 + 101) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("The winner is Dolphin");
} else if (scoreDolphins < scoreKoalas) {
  console.log("The winner is Koalas");
} else {
  console.log("It is draw");
}

/////////////////////////////////////////////////////////////////////////////////////

const day = "Monday"; // Monday

switch (day) {
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
}

////////////////////////////////////////////////////////////////

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D

// let languagePrompt = prompt("Which language do you speak? ");

switch (languagePrompt) {
  case "Arabic":
    console.log("Great Language");
  case "ArabicEnglish":
    console.log("Great Language bilingual");
  case "English":
    console.log("Smart ");
  default:
    console.log("Awesome ");
}

////////////////////////////////////////////////////////////////

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

////////////////////////////////////////////////////////////////
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

let bill = 240;

let tip = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
