function sumRange(n) {
  let res = 0;

  function recursiveSum(n) {
    if (n === 0) return;

    res += n;
    recursiveSum(n - 1);
  }

  recursiveSum(n);
  return res;
}

console.log(sumRange(10));
