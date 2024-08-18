let arr1 = [1, 2, 3];
arr1;

let i = 0;
let arr2 = new Array(3).fill(0).map(() => i++);
arr2;

let arr3 = new Array("1", "2", "3");
arr3;

let arr4 = Array.of(1, 2, 3);
arr4;

let arr5 = Array.from("abc");
arr5;

console.log(arr5[1]);
console.log(arr5.at(-1));
console.log(arr5.length);
