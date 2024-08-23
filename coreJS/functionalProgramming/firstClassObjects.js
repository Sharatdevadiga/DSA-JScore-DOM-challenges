// FUNCTIONS CAN BE PASSED AS AN ARGUMENT, STORED IN A VARIABLE AND RETURNED FROM THE OTHER FUNCTION
// FUNCTION STORED IN A VARIABLE
const add = function (a, b) {
  return a + b;
};

// PASSED AS AN ARGUMENT
function operate(a, b, func) {
  let res = func(a, b);

  //   FUNCTION RETURNING FUNCTION
  return function () {
    console.log(`the result of the function is ${res}`);
  };
}

const logOperate = operate(5, 6, add);
logOperate();
