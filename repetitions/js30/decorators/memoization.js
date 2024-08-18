function decorator(fn) {
  const memo = new Map();

  return function (...args) {
    let key = JSON.stringify(args);
    if (memo.get(key)) {
      console.log("returning the cached value");
      return memo.get(key);
    }

    const res = fn(...args);
    memo.set(key, res);
    return res;
  };
}

const add = (a, b) => {
  return a + b;
};

const memoAdd = decorator(add);
console.log(memoAdd(4, 6));
console.log(memoAdd(4, 6));
