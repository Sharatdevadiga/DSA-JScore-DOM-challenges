let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function sumOfArray1(arr) {
  let sum = 0;
  for (let i = 0; i, i < arr.length; i++) sum += arr[i];
  return sum;
}

function sumOfArray2(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function sumOfArray3(arr) {
  let sum = 0;
  arr.forEach((num) => (sum += Number(num)));
  return sum;
}

function sumOfArray4(arr) {
  let sum = 0;

  function recursiveSum(idx) {
    if (idx >= arr.length) return;
    sum += arr[idx];
    recursiveSum(idx + 1);
  }

  recursiveSum(0);
  return sum;
}

console.log(sumOfArray1(arr));
console.log(sumOfArray2(arr));
console.log(sumOfArray3(arr));
console.log(sumOfArray4(arr));
