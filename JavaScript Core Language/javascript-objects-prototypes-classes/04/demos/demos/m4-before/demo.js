"use strict";
(function () {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // display(Person.prototype);

  // display(jim.__proto__);

  // display(Person.prototype === jim.__proto__);

  Person.prototype.age = 29;

  var jim = new Person("Jim", "Cooper");
  let sofia = new Person("Sofia", "Cooper");

  Person.prototype = { age: 18 };

  let kris = new Person("Kris", "Cooper");

  display(Person.prototype);
  display(jim.age);
  display(sofia.age);
  display(kris.age);
})();
