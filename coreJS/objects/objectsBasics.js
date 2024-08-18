let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let { a, b, c } = obj;
console.log(a, b, c);

// some methods
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Onject.assign
const person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer",
};

const personsCar = {
  carBrand: "Toyota",
  carModel: "Corolla",
};

console.log(Object.assign(person, personsCar));
console.log(person);

// freezing the object
Object.freeze(person);

// custom methods
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  startCar: function () {
    console.log(`starting the ${this.brand}`);
  },
};

car.turnOff = function () {
  console.log(`Turning off ${this.brand}`);
};

car.startCar();
car.turnOff();
