let obj = { a: 1, b: 2, c: 3, d: 4 };
let map = new Map(Object.entries(obj));

let map2 = new Map([
  ["hello", "world"],
  ["how", "are you"],
  ["whats", "up"],
  ["be", "chill"],
]);

for (let value of map) {
  console.log(value);
}

for (let [key, value] of map) {
  console.log(`${key}->${value}`);
}

for (let key of map.keys()) {
  console.log(map.get(key));
}

map2.forEach((value, key) => console.log(`${key} => ${value}`));
