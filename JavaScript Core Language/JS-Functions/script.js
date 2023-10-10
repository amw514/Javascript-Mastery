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
