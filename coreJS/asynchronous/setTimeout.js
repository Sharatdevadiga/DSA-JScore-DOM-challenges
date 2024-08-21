// SETTIMEOUT WITH ARGUMENTS
function sayHello(name, message) {
  console.log(`${message} ${name}`);
}

setTimeout(sayHello, 2000, "jhon", "welcome");

// DEKAYED EXECUTION
async function greet(name) {
  await delay();
  console.log(`Hello ${name}`);
}

function delay() {
  return new Promise((resolve) => {
    resolve(setTimeout(() => {}, 1500));
  });
}

greet("King");

// debouncer using setTimeout
function debounce(fn, delay = 750) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);
    return new Promise((resolve) => {
      timerId = setTimeout(() => {
        resolve(fn(...args));
      }, delay);
    });
  };
}

const add = (a, b) => a + b;
const debouncedAdd = debounce(add, 1500);
debouncedAdd(4, 6).then((value) => console.log(value));
