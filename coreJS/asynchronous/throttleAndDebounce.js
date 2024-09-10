function throttled(fn, delay = 1000) {
  let timerId = null;

  return function (...args) {
    if (!timerId) {
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    }
  };
}

function debounce(fn, delay = 1000) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedFn = debounce(fn, 3000);
const throttledFn = throttled(fn, 3000);

function fn() {
  console.log("executing the function");
}

let count = 0;
let intervalId = setInterval(() => {
  console.log("trying to call the function");
  // debouncedFn()
  throttledFn();
  count++;
  if (count === 10) clearInterval(intervalId);
}, 1000);
