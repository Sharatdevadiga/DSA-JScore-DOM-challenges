// FIBONACHI USING RECURSION
const fibonachiRecursion = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonachiRecursion(n - 2) + fibonachiRecursion(n - 1);
};
console.log(fibonachiRecursion(15));

// FIBONACHI USING LOOP
const fibonachiNormal = function (n) {
  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = b;
    b = b + a;
    a = temp;
  }

  return b;
};
console.log(fibonachiNormal(15));

// FIBONACHI GENERATOR FUNCTION
const fibonachiGen = function* () {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    let temp = b;
    b = a + b;
    a = temp;
  }
};

let gen = fibonachiGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
