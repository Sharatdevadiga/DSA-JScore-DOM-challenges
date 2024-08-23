// DECLARATIVE
function add(nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

// IMPERATIVE
function add2(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(add(arr));
console.log(add2(arr));
