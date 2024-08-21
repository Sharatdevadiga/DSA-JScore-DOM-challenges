const items = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Spinach", category: "Vegetable" },
  { id: 5, name: "Orange", category: "Fruit" },
];

function groupData(data) {
  let result = {};

  for (let obj of items) {
    if (result[obj.category]) {
      result[obj.category].push(obj);
    } else {
      result[obj.category] = [obj];
    }
  }

  return result;
}

console.log(groupData(items));

// {
//     Fruit: [
//         { id: 1, name: 'Apple', category: 'Fruit' },
//         { id: 3, name: 'Banana', category: 'Fruit' },
//         { id: 5, name: 'Orange', category: 'Fruit' }
//     ],
//     Vegetable: [
//         { id: 2, name: 'Carrot', category: 'Vegetable' },
//         { id: 4, name: 'Spinach', category: 'Vegetable' }
//     ]
// }
