// FOR IN LOOP -> FOR ITERATING THROUGH THE PROPERTIES OF THE OBJECTS
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in obj) {
  console.log(obj[key]);
}

for (let value of Object.values(obj)) {
  console.log(value);
}

for (let key of Object.keys(obj)) {
  console.log(key);
}

for (let value of Object.values(obj)) {
  console.log(value);
}

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} -> ${value}`);
}
