function expoSearch(arr, target) {
  let step = 1;
  let prev,
    next = step;

  while (arr[step] != undefined && arr[step] < target) {
    prev = next;
    step *= 2;
    next = step;
  }

  next = Math.min(arr.length - 1, next);

  for (let i = prev; i < next; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

let arr = [1, 3, 5, 7, 9, 11];
console.log(expoSearch(arr, 9));
