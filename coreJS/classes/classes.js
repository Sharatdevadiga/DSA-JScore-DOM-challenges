class Car {
  constructor(name, year, version) {
    (this.name = name), (this.year = year), (this.version = version);
    this.isEngineStarted = false;
  }

  startEngine() {
    console.log(`${this.name} started`);
    this.isEngineStarted = false;
  }

  stopEngine() {
    console.log(`${this.name} stopped`);
    this.isEngineStarted = false;
  }
}

const car1 = new Car("fiat", 2015, "c032");
const car2 = new Car("toypta", 2016, "f443");
console.log(car1);
console.log(car2);

car1.startEngine();
car2.startEngine();
car1.stopEngine();
car2.stopEngine();
