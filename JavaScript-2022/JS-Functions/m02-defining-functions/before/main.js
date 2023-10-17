// Create a new function that converts gallons
// to liters: convertToLiters

let recursiveFunction = (countingItems) => {
  let answer = `${countingItems} items left`;
  console.log(answer);
  countingItems -= 1;
  if (countingItems > 0) {
    recursiveFunction(countingItems);
  }
};

recursiveFunction(500);

// Getter

class Passenger {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let john = new Passenger("John", "Doe");

console.log(john.fullName);
