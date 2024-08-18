function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];

    let j;
    for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currVal;
  }
  return arr;
}

let arr = [1, 3, 5, 7, 9, 11, 2, 4, 6, 8, 10];
console.log(insertionSort(arr));
