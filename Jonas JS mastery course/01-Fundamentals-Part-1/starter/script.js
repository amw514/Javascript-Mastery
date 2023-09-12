////////////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = "USA";
let continent = "Asia";
let population = 1000000000;

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
