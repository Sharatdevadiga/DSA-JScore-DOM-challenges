function createCounter() {
  let count = 0;

  return function counter() {
    return count++;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// CLOSURE TO CREATE PRIVATE VARIABLES
function createPerson(name, age) {
  _name = name;
  _age = age;

  function getName() {
    return _name;
  }

  function getAge() {
    return _age;
  }

  return {
    getName,
    getAge,
  };
}

const person = createPerson("Hulk", 46);
console.log(person.getName());
console.log(person.getAge());

// CLOSURE EXAMPLE
function outer() {
  const val = "outer Val";

  function inner(...args) {
    console.log(args);
    console.log(val);
  }

  return inner;
}

const func = outer();
func("hello");
