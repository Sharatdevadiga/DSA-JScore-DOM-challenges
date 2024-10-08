function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIdx = partition(arr, low, high);
    console.log(pivotIdx, arr);
    quickSort(arr, low, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  let ptr = low;
  let pivot = arr[high];

  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[ptr]] = [arr[ptr], arr[i]];
      ptr++;
    }
  }
  [arr[ptr], arr[high]] = [arr[high], arr[ptr]];
  return ptr;
}

let arr = [7, 10, 4, 3, 5];
console.log(quickSort(arr));
