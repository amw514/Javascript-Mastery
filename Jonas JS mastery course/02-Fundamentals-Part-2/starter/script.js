"use strict";

////////////////////////////////////////////////////////////////

function add(a, b) {
  return a + b;
}

console.log(add(4, 5));

////////////////////////////////////////////////////////////////

let subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 7));

////////////////////////////////////////////////////////////////

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(5, 0));

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

////////////////////////////////////////////////////////////////

const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangesPieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Challenge 1

let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log("dolphins win");
    P;
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log("koalas  win");
  } else {
    console.log("none wins");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

//////////////////////////////////////////////////////////////////////////

// Arrays

const friends = ["Afriend", "Bfriend", "Cfriend", "Dfriend"];

console.log(friends);

// Challenge 4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
