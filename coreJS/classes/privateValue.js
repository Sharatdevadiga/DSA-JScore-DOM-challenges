// CREATING PRIVATE VARIABLES USING THE CONSTRUCTOR FUNCTION
class Counter {
  constructor() {
    // pvt varable
    let count = 0;

    // pvt method
    const increment = () => count++;

    // public method
    this.getIncrementCount = function () {
      return increment();
    };
  }
}

const counter1 = new Counter();
console.log(counter1.getIncrementCount());
console.log(counter1.getIncrementCount());
console.log(counter1.getIncrementCount());

// CREATING THE PRIVATE VARIABLES USING THE # SYMBOL
class Counter2 {
  constructor() {}

  #count = 0;

  #increment = () => this.#count++;

  getIncrementCount() {
    return this.#increment();
  }
}

const counter2 = new Counter2();
console.log(counter2.getIncrementCount());
console.log(counter2.getIncrementCount());
console.log(counter2.getIncrementCount());
