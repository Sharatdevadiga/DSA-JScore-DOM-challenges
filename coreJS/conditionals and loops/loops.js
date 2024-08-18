//  SIMPLE FOR LOOP
const arr = [1, 4, 2, 3, 5, 6, 7, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

sum;

// FOR OF LOOP
let forOfRes = [];
for (let num of arr) {
  forOfRes.push(num * 2);
}
forOfRes;

let forOfRes2 = [];
for (let [index, val] of Object.entries(arr)) {
  forOfRes2.push(index * val);
}
forOfRes2;

// FOR EACH LOOP
let forEachRes = [];
arr.forEach((num) => forEachRes.push(num / 2));
forEachRes;

// WHILE LOOP
let count = 0;
while (count < 10) {
  count++;
}
count;

// NESTED WHILE
let count2 = 0;
let count2Increments = [];
while (count < 15) {
  while (count2 < count) {
    count2++;
  }
  count2Increments.push(count2);
  count++;
}
count2;
count2Increments;

// DO WHILE LOOP
do {
  count++;
} while (count < 20);

count;

// JUMPING STATEMENTS
let breakRes = [];
for (let i = 0; i < arr.length; i++) {
  if (i === 5) break;
  breakRes.push(arr[i]);
}
breakRes;

let continueRes = [];
for (let i = 0; i < arr.length; i++) {
  if (i === 5) continue;
  continueRes.push(arr[i]);
}
continueRes;

// FOR IN LOOP -> FOR ITERATING THROUGH THE PROPERTIES OF THE OBJECTS AND INDICES OF THE ARRAYS
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in obj) {
  console.log(key);
}
