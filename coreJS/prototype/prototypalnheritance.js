const Vehicle = function (model, year) {
  this.model = model;
  this.year = year;
};

Vehicle.prototype.start = function () {
  return `${this.model} is starting`;
};

const Car = function (model, year, seats) {
  Vehicle.call(this, model, year);
  this.seats = seats;
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const toyota = new Car("Toyota", 2020);
console.log(toyota.start());

// EXAMPLE 2
function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} is barking`);
};

const rockey = new Dog("Rockey", "huskey");
console.log(rockey);
rockey.eat();
rockey.bark();
