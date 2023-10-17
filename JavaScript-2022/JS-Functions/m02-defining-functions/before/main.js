// Create a new function that converts gallons
// to liters: convertToLiters

let recursiveFunction = (countingItems) => {
  let answer = `${countingItems} items left`;
  console.log(answer);
  countingItems -= 100;
  if (countingItems > 0) {
    recursiveFunction(countingItems);
  }
};

recursiveFunction(500);
