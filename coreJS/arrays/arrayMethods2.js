const nums = [1, 2, 3, 4, 5];

const squares = nums.map((x) => x ** 2);
squares;

const even = nums.filter((x) => x % 2 == 0);
even;

const sum = nums.reduce((a, b) => a + b);
sum;

const searchedEl = nums.find((num) => num % 3 == 0);
searchedEl;

const sortedAsc = nums.slice().sort((a, b) => a - b);
sortedAsc;
const sortedDesc = nums.slice().sort((a, b) => b - a);
sortedDesc;

const filtered = nums.filter((num) => num % 2 !== 0);
filtered;

const reversed = nums.slice().reverse();
reversed;

const someRes = nums.some((num) => num % 2 === 0);
someRes;

nums.push(8, 7);
nums;

nums.pop();
nums;

nums.shift();
nums;

nums.unshift(1);
nums;

nums.splice(2, 2, "9", "9");
nums;

const slice = nums.slice(0, 3);
slice;

const concat = [1, 2, 3, 4].concat(nums);
concat;

const idx = nums.indexOf(5);
idx;

const lastIdx = nums.lastIndexOf(5);
lastIdx;

const includes = nums.includes(5);
includes;

const res = nums.find((num) => num > 4);
res;

let str = nums.join(",");
str;

let nums2 = [1212121212, -23423423423];
let localStr = nums2.toLocaleString();
localStr;
