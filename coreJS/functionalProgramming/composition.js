// A technique where input of oone function is passed on the new function as the input

// 1. COMPOSE FUNCTION -> calls function from right to left
const compose = function (...fns) {
  return function (x) {
    return fns.reduceRight((res, fn) => fn(res), x);
  };
};

const double = (x) => x * 2;
const square = (x) => x * x;

const composedFn = compose(square, double);
console.log(composedFn(2));

// 2. PIPE FUNCTION -> calls function from left to right
const pipe = function (...fns) {
  return function (x) {
    return fns.reduce((res, fn) => fn(res), x);
  };
};

const pipeFn = pipe(square, double);
console.log(pipeFn(2));
