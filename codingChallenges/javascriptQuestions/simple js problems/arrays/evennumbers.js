function evenNums1(arr) {
  let even = [];
  for (let num of arr) {
    if (num % 2 === 0) even.push(num);
  }
  return even;
}

function evenNums2(arr) {
  let res = arr.filter((num) => num % 2 === 0);
  return res;
}

let arr = [1, 2, 4, 3, 5, 6, 7, 8, 9, 10];

console.log(evenNums1(arr));
console.log(evenNums2(arr));
