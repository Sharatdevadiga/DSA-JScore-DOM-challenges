// GROUP THE DATA BASED ON THE AGE
const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 23 },
  { name: "Eve", age: 22 },
  { name: "Frank", age: 23 },
];

function groupdata(data) {
  let res = {};
  for (let entry of data) {
    if (!res[entry.age]) {
      res[entry.age] = [entry];
    } else {
      res[entry.age].push(entry);
    }
  }

  return res;
}

console.log(groupdata(people));

/* 
{
  "21": [
    { name: "Alice", age: 21 },
    { name: "Charlie", age: 21 }
  ],
  "22": [
    { name: "Bob", age: 22 },
    { name: "Eve", age: 22 }
  ],
  "23": [
    { name: "David", age: 23 },
    { name: "Frank", age: 23 }
  ]
}
*/
