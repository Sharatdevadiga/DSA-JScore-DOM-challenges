// OBJECTS USING CONSTRUCTOR FUNCTION
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hello ${this.name}`);
  };
}

const jhon = new Person("Jhon", 34);
jhon.greet();
