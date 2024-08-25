function jumpSearch(arr, target) {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;
  let next = 0;

  while (next < n && arr[next] < target) {
    if (next + step > n) return -1;
    prev = next;
    next += step;
  }

  for (let i = prev; i < next; i++) {
    if (arr[i] === target) return i;
  }
}

let arr = [1, 3, 5, 7, 9, 11, 13];
console.log(jumpSearch(arr, 7));
