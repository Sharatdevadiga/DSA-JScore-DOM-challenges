function memoization(fn) {
  let cache = [];

  return function memo(...args) {
    let key = JSON.stringify(args);
    if (memo[key]) {
      console.log("returning the stored res");
      return cache[key];
    }

    let res = fn(args);
    cache[key] = res;
    console.log("calling function");
    return res;
  };
}

const findSum = function (nums) {
  return nums.reduce((a, b) => a + b, 0);
};

let memoizedFindSum = memoization(findSum);
console.log(memoizedFindSum(1, 2, 3, 4, 5));
