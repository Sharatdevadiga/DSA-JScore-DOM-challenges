class Calculator {
  constructor() {
    this.value = 0;
  }

  add(number) {
    this.value += number;
    return this;
  }

  subtract(number) {
    this.value -= number;
    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  divide(number) {
    this.value /= number;
    return this;
  }

  getValue() {
    return this.value;
  }
}

const res = new Calculator();
const val = res.add(5).subtract(2).multiply(4).divide(2).getValue();
console.log(val);
