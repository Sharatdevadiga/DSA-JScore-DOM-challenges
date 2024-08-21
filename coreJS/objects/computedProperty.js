const someName = "abc";

class Cp {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  // Computed property name
  [someName]() {
    if (someName === "abc") return "abc";
    else return "unknown";
  }
}

const cp1 = new Cp();
console.log(cp1[someName]());
console.log(cp1["abc"]());
