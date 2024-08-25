function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curVal;
  }

  return arr;
}

let arr = [1, 3, 2, 5, 4, 7, 6, 9, 8];
console.log(insertionSort(arr));
