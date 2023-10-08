"use strict";
(function () {
  let person = {
    first: "Jim",
    last: "Cooper",
    age: 29,
  };

  person["hair color"] = "black";

  display(person["first"]);

  display(person["hair color"]);

  let properName = "first";

  display(person[properName]);

  for (let key in person) {
    display(key + ":" + person[key]);
  }

  Object.defineProperty(person, "first", { writable: false });

  Object.defineProperty(person, "first", { enumerable: false });

  Object.defineProperty(person, "first", { configurable: false });

  display(Object.getOwnPropertyDescriptor(person, "first"));
})();
