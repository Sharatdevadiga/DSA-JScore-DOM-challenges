const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// adding elements
matrix.push([10, 11, 12]);
matrix.push([10, 11, 12]);
matrix[3].push(0);
matrix[2].splice(3, 0, 0);

// removing elements
matrix.pop();
matrix[3].pop();
matrix[2].pop();
matrix.splice(3, 1);

// accessing aelements
console.log(matrix);
console.log(matrix[2]);
console.log(matrix[2][2]);

// Iterating
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

matrix.forEach((array) => {
  array.forEach((el) => console.log(el));
});

for (let array of matrix) {
  for (let el of array) {
    console.log(el);
  }
}
