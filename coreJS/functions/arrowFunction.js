let nums = [1, 2, 3, 4, 5];

let squares = nums.map((num) => num ** 2);
squares;

const getSum = (nums) => {
  let sum = 0;
  nums.forEach((num) => (sum += Number(num)));
  return sum;
};

console.log(getSum(nums));
