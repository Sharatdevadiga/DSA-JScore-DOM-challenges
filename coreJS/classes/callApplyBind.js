function greet() {
  console.log(`hello ${this.name}`);
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Jhon", 34);
const person2 = new Person("Jane", 33);
const person3 = new Person("King", 32);

greet.call(person1);
greet.apply(person2);
const greetPerson = greet.bind(person3);
greetPerson();

// BIND -> RETURNS A NEW FUNCTION,  BINDING THE UNCTION TO THE Object
const personX = {
  firstName: "Jane",
  lastname: "Doe",
  getFullName: function () {
    return `${this.firstName} ${this.lastname}`;
  },
};

const greet2 = function (message) {
  console.log(`${this.getFullName()} ${message}!!`);
};

const boundGreet = greet2.bind(personX, "Welcome");
boundGreet();

const multiply = (a, b) => a * b;
const double = multiply.bind(null, 2);
console.log(double(5));

// CALL FUNCTION DIRECTLY CALLS THE TARGET FUNCTION ON THE THIS CONTEXT
greet2.call(personX, "Hello");

// APPLY IS SIMILAR TO THE CALL FUNCTION BUT ACCEPTS THE ARGUMENTS IN THE ARRAY
greet2.apply(personX, ["Hola"]);
