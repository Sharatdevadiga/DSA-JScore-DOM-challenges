class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return undefined;
    let popped = null;
    if (this.first === this.last) {
      popped = this.first;
      this.last = null;
    } else {
      popped = this.first;
      this.first = popped.next;
      popped.next = null;
    }

    this.size--;
    return popped.value;
  }
}

let stack1 = new Stack();
stack1.push(4);
stack1.push(5);
console.log(stack1);
const popped = stack1.pop();
console.log(popped);
console.log(stack1);
