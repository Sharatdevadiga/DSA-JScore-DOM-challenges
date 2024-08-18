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
