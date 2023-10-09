"use strict";
(function () {
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    get fullName() {
      return this.firstName + " " + this.lastName;
    }

    set fullName(fullName) {
      let nameParts = fullName.split(" ");
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }

    isAdult() {
      return this.age >= 18;
    }
  }

  let jim = new Person("Jim", "Cooper", 29);

  jim.fullName = "Fred Jones";

  display(jim);
  display(jim.fullName);

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }

    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age);
    }
  }
})();
