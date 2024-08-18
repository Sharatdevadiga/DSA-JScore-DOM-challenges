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
