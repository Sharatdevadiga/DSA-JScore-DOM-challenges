// FUNCTION DECLARATION
// hoisted, cannot be used as argument to other function
function functionDecl() {
  // body
}

// FUNCTION EXPRESSION
// not hoisted, can be used as an argument to other function
const functionExp = function () {
  // function body
};

// PARAMETERS AND ARGUMENTS
function funcWithParameters(p1 = "default value 2", p2 = "default value 2") {
  // function body
  return "value";

  // return ["values"]
  // return {values}
}

let a1 = 5,
  a2 = 5;
funcWithParameters(a1, a2); //arguments
// arguments can be passed as the values or references

// PASS BY VALUE
function findSquare(a) {
  return a ** 2;
}

let a = 5;
console.log(findSquare(a));
console.log(a);

// PASS BY REFERENCE
let arr = [1, 2, 3];
function findSquareOfArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }
  return arr;
}
console.log(findSquareOfArr(arr));
console.log(arr);

// COPY INPUT OF REFERENCE TYPE TO PREVENT MUTATION
function findSquareOfArr2(array) {
  let res = [...array];
  for (let i = 0; i < array.length; i++) {
    res[i] = res[i] ** 2;
  }
  return res;
}
let arr3 = [2, 3, 4];
console.log(findSquareOfArr2(arr3));
console.log(arr3);
