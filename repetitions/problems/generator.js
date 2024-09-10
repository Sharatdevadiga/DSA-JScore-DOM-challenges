const fibonachiGen = function* (n) {
  let a = 0;
  let b = 1;

  while (a <= n) {
    yield a;
    let next = a + b;
    a = b;
    b = next;
  }
};

const fiboGen = fibonachiGen(10);
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());

function fiboRecursion(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let res = [0, 1];

  function fibo(i) {
    if (i === n) return;

    let val = res[i - 1] + res[i - 2];
    res.push(val);

    fibo(i + 1);
  }

  fibo(2);
  return res;
}

console.log(fiboRecursion(7));
