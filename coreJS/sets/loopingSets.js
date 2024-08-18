let set = new Set([1, 2, 5, 3, 7, 6, 8]);

for (let value of set) {
  console.log(value);
}

set.forEach((el) => console.log(el));

let valuesIterator = set.values();
for (let value of valuesIterator) {
  console.log(value);
}

const entriesIterator = set.entries();
for (let value of entriesIterator) {
  console.log(value);
}
