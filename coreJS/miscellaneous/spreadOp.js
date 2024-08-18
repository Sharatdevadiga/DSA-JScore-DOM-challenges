// SPREAD OPERATOR WITH ARRAYS
// SPREAD OPERATOR IN EXPANDING ARRAYS
let a = [1, 2, 3, 4, 5];
console.log(...a);

let greet = ["Hello", "world"];
console.log(greet);
console.log(...greet);

// STR TO ARRAY OF CH
let str = "Hello";
let strArr = [...str];
console.log(strArr);

//COMBINING ARRAYS
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);

// PUSHING ARR2 TO ARR1
arr1.push(...arr2);
arr1;

// COPPYING ARRAY ELEMSNETS
let greet2 = [...greet];
console.log(greet === greet2);

let greet3 = greet;
console.log(greet === greet3);

let greet4 = [...greet, "How are you"];
greet4;

// PASSIGNG ARRAY OF ARGUMENTS TO FUNCTIONS
let marks = [87, 98, 78, 98];
function sum(m1, m2, m3, m4) {
  return m1 + m2 + m3 + m4;
}
console.log(sum(...marks));

// WITH MARH FUNCTIONS
let max = Math.max(...a);
max;

// PASSING REST ARGUMENTS
function sumMultiply(multiplier, ...nums) {
  let res = 0;
  for (let num of nums) {
    res += num;
  }
  return res * multiplier;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mul = 5;
console.log(sumMultiply(mul, ...arr));

// -----------------------------------------
// SPREAD OPERATOR WITH OBJECTS
// MERGING OBJECTS -> helpful in making default assignments
let o1 = { a: 1, b: 2, c: 3, d: 3 };

let o2 = { d: 4, e: 5, f: 6 };

let o3 = { ...o1, ...o2, g: 7, h: 8 };
o3;
