const a = [1, 2, 3, [4, [5, 6]], 7, 8];
// [  1, 2, 3, 4,  5, 6, 7, 8]

function flatenArray(arr) {
  // result
  let res = [];

  // recursive fuction
  function helper(el) {
    if (Array.isArray(el)) {
      el.forEach(helper);
    } else {
      res.push(el);
    }
  }

  arr.forEach(helper);
  return res;
}

console.log(flatenArray(a));
