let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend.");
    break;
  default:
    console.log("It's a regular day.");
}

// Another Switch Case example

let fruit = "apple";

switch (fruit) {
  case "apple":
  case "pear":
  case "banana":
    console.log("This is a fruit.");
    break;
  case "carrot":
  case "broccoli":
  case "celery":
    console.log("This is a vegetable.");
    break;
  default:
    console.log("I don't know what this is.");
}

// A detail view on switch

let fruit = "apple";

switch (fruit) {
  case "apple":
  case "pear":
  case "banana":
    console.log("This is a fruit.");
    break;
  case "carrot":
  case "broccoli":
  case "celery":
    console.log("This is a vegetable.");
    break;
  default:
    console.log("I don't know what this is.");
}

// Add new exmaple In this example, we're checking the value of the fruit variable and executing different code based on its value. If fruit is "apple", we log "This is an apple." to the console. If fruit is "banana", we log "This is a banana." to the console. If fruit is "orange", we log "This is an orange." to the console. If fruit is any other value, we throw an error with the message "Unrecognized fruit: " followed by the value of fruit. This is an example of how to use the switch statement to handle unexpected values and throw an error if the value is not recognized.

// Note that the throw statement is used to throw an error in JavaScript. When an error is thrown, the program stops executing and the error message is displayed in the console.

// A switch statement in JavaScript is a control flow statement used to evaluate an expression and perform different actions based on its value. It is often used when you have multiple conditions to check against a single value and want to simplify the code.

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
    break;
  case "orange":
    console.log("This is an orange.");
    break;
  default:
    throw new Error("Unrecognized fruit: " + fruit);
}

// Switch with multiple cases and same output

let color = "red";

switch (color) {
  case "blue":
  case "light blue":
  case "dark blue":
    console.log("Color is Blue");
    break;

  case "red":
  case "light red":
  case "dark red":
    console.log("Color is red");
    break;
}
