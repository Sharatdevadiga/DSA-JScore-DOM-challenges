function memoAdd(fn) {
  let map = new Map();

  // return a memoized funcion
  return function (...args) {
    let key = JSON.stringify(args);

    if (map.has(key)) {
      console.log("returning memoized result");
      return map.get(key);
    } else {
      const res = fn(...args);
      map.set(key, res);
      console.log("calling the function");

      return res;
    }
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoAdd(add);

console.log(memoizedAdd(3, 5));
console.log(memoizedAdd(3, 5));
console.log(memoizedAdd(4, 5));
