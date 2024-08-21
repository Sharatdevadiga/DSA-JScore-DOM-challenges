function average1(arr) {
  const n = arr.length;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return (sum / n).toFixed(2);
}

function average2(arr) {
  let n = arr.length;
  let sum = 0;
  for (let num of arr) sum += num;
  return (sum / n).toFixed(2);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(average1(arr));
console.log(average2(arr));
