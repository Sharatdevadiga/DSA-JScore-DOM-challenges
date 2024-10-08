function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex !== i) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
}

let arr = [1, 4, 2, 3, 6, 5, 7, 8];
console.log(selectionSort(arr));
