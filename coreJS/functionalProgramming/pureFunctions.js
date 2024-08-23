// PURE FUNCTION-> no side efffect
function add(a, b) {
  return a + b;
}

console.log(add(6, 4));

// IMPURE FUNCTION -> HAVE SIDE EFFECT
let counter = 4;
function increment() {
  counter++;
  return counter;
}
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
