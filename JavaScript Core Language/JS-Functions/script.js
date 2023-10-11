function greetings(name) {
  console.log("hello " + name);
}

greetings("John");

// The Argument Object

function printAll() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printAll(1, 2, 3, 4, 5, 6);
printAll(1, 2);

// IIFE

(function myIIFE() {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log("Finished!");
})((num = 0));

let increment = (() => {
  let counter = 0;
  let credits = (num) => {
    console.log(`I have ${num} credit(s)`);
  };
  return () => {
    counter++;
    credits(counter);
  };
})();

increment();
increment();
increment();

let greeting = () => {
  return "Hello World!";
};

let messages = greeting();

console.log(messages);

let sum = (sum1, sum2) => {
  return sum1 + sum2;
};

let output = sum(2, 3);

console.log(output);

// Call Method

let person1 = { name: "John", age: 22 };
let person2 = { name: "Mary", age: 25 };

let sayHi = function () {
  console.log("Hi " + this.name);
};

sayHi();
sayHi.call(person1);
sayHi.call(person2);

// A closure Function

let x = 1;

let parentFunction = () => {
  let localVar = 2;

  let childFunction = () => {
    console.log((x += 5));
    console.log((localVar += 10));
  };

  return childFunction;
};

let result = parentFunction();

console.log(result);

result();
