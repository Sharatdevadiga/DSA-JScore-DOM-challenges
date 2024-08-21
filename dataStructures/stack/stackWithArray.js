class Stack {
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    return this.values.length;
  }

  pop(val) {
    if (this.values.length === 0) return undefined;
    let popped = this.values.pop();
    return popped;
  }
}

let stack1 = new Stack();
stack1.push(5);
stack1.push(6);
stack1.push(7);
stack1.push(8);
stack1.push(9);
stack1.push(10);
console.log(stack1);
console.log(stack1.pop());
