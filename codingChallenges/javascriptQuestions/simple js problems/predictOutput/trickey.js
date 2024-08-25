// PREDICT OUTPUT

// REDUCE
let arr = [1, 2, 3, 4];
arr.reduce((x, y) => console.log(x, y));

console.log("------------------------");
arr.reduce((x, y) => console.log(x, y), 0);

let arr2 = arr.reduce((acc, x) => acc.concat([x * x]), []);
console.log(arr2);

console.log(
  [
    [0, 1],
    [2, 3],
  ].reduce(
    (acc, val) => {
      return acc.concat(val);
    },
    [0, 1]
  )
);

// NOT DEFINED VALUES
let max;
arr.forEach((el) => {
  if (max > el) {
    max = el;
  }

  console.log(max);
});

const myFunc = ({ x, y, z }) => {
  console.log(x, y, z);
};
myFunc(1, 2, 3);

// ARROW FUNCTIONS
const nums = arr.map((num) => {
  num * 2;
});
console.log(nums);

// SCOPE
const { name: myname } = { name: "lynda" };
console.log(name);
