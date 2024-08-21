function factorialResursive(n) {
  if (n === 1) return 1;

  return n * factorialResursive(n - 1);
}

console.log(factorialResursive(5));

function factorialIterative(n) {
  let res = 1;
  while (n > 0) {
    res *= n;
    n--;
  }
  return res;
}
console.log(factorialIterative(5));
