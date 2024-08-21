function secSmallest1(arr) {
  let set = new Set(arr);
  arr = Array.from(set);
  let small = Infinity;
  sec = Infinity;

  for (let num of arr) {
    if (num < small) {
      sec = small;
      small = num;
    } else if (num < sec) {
      sec = num;
    }
  }

  return [small, sec];
}

function secSmallest2(arr) {
  let set = new Set(arr);
  arr = Array.from(set);
  arr.sort((a, b) => a - b);
  return [arr[0], arr[1]];
}

let arr = [2, 2, 4, 6, 8, 10];
console.log(secSmallest1(arr));
console.log(secSmallest2(arr));
