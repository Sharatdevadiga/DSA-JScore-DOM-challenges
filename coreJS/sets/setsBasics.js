// SETS -> UNIQUE VALUES

// creating set
let set1 = new Set();
let set2 = new Set(["welcome", "to", "programming"]);

// adding elements to set
set1.add("hello");
set1.add("world");
set1.add([6, 7]);

// removing emements from set
set1.delete("hello");
// set2.clear()

//other set methods
console.log(set1.has("hello"));
console.log(set1.size);
console.log(set2.size);
set1.forEach((el) => console.log(el));
let keys = set1.keys();

// set.keys() and set.values() returns the iterator object
let set1keys = set1.keys();
let set1Values = set1.values();
console.log(set1keys.next().value);
console.log(set1keys.next().value);
console.log(set1Values.next().value);
console.log(set1Values.next().value);

console.log(set1);
console.log(set2);

// uniqueness of element in the set
const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

const car2 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

let set = new Set();
set.add(car1);
set.add(car2);
set;
