function minValue(arr1, arr2, n) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);
  let res = 0;

  for (let i = 0; i < n; i++) {
    res += arr1[i] * arr2[i];
  }

  return res;
}

let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(minValue(a, b, 3));
