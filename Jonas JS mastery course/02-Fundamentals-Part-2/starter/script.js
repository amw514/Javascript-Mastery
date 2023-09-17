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
