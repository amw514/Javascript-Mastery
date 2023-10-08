"use strict";
(function () {
  let person = {
    firstName: "John",
    lastName: "Cooper",
    isAdult: function () {
      return person.age >= 10;
    },
  };

  person.age = 29;

  display(person.age);
  display(person.firstName);
  display(person.isAdult());

  function registerUser(firstName, lastName) {
    let person1 = {
      firstName,
      lastName,
    };
    display(person1);
  }

  registerUser("Hello", "Buddy");

  display(Object.keys(person));
  display(Object.values(person));

  for (let key in person) {
    display(key);
    display(person[key]);
  }

  function Person1(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = () => {
      return this.age > 21;
    };
  }

  let person12 = new Person1("A", "B", 28);

  display(person12);
  display(person12.isAdult());
})();
