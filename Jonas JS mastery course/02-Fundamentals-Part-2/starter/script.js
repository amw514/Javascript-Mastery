"use strict";

////////////////////////////////////////////////////////////////

function add(a, b) {
  return a + b;
}

// console.log(add(4, 5));

////////////////////////////////////////////////////////////////

let subtract = (a, b) => {
  return a - b;
};

// console.log(subtract(10, 7));

////////////////////////////////////////////////////////////////

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(5, 0));

////////////////////////////////////////////////////////////////

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const age = calcAge(2001);
console.log(age);

////////////////////////////////////////////////////////////////

let calcAge2 = (birthYear) => 2023 - birthYear;

let age2 = calcAge2(2001);

console.log(age2);

let yearsUntilRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

let remainingYears = yearsUntilRetirement(2001);
console.log(remainingYears);
