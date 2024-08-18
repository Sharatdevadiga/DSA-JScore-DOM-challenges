// KEY VALUE STORE
let map1 = new Map();
let map2 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
  ["f", 6],
]);
map1.set("key1", "value1");

map1.delete("key1");
map1.clear();

console.log(map1);
console.log(map2);
console.log(map2.size);
console.log(map2.has("e"));
console.log(map2.get("f"));

console.log(Array.from(map2));
