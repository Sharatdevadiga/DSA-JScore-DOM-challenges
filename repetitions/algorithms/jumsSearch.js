function jumpSearch(arr, target) {
  let n = arr.length;
  let jumpInterval = Math.floor(Math.sqrt(n));
  let ptr = 0;
  let prevPtr = 0;

  while (arr[ptr] < target && ptr <= n) {
    prevPtr = ptr;
    ptr += jumpInterval;
  }
  if (ptr > n) return -1;

  for (let i = prevPtr; i < Math.min(n, ptr); i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 13];
console.log(jumpSearch(arr, 7));
