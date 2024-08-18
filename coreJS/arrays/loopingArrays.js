let arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let idx in arr) {
  console.log(arr[idx]);
}

for (let val of arr) {
  console.log(val);
}
