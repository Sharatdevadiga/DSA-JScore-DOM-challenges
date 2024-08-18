function jumpSearch(arr, target) {
  let n = arr.length;
  let root = Math.floor(Math.sqrt(n));
  let step = root;
  let prev = 0;

  while (arr[Math.min(step, n - 1)] < target) {
    prev = step;
    step += root;
    if (prev >= n) return -1;
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 13];
console.log(jumpSearch(arr, 9));
