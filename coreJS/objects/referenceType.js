let obj1 = {
  key1: "val1",
};

let obj2 = obj1;

console.log(obj1 === obj2);
console.log(obj1 == obj2);

let a = {};
let b = {};
console.log(a === b);
console.log(a == b);

// CONST OBJECTS CAN BE MODIFIED BUT THEY CANNOT BE REASSIGNED
const obj3 = {
  k: "v1",
};

console.log(obj3);
obj3.k = "v2";
console.log(obj3);

// CLONNING OBJECTS
const user = {
  name: "Jhon",
  age: "24",
};

const user2 = { ...user };
console.log(user2);
console.log(user2 === user);

const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);
console.log(user3 === user);

const user4 = {};
Object.assign(user4, user);
console.log(user4);
console.log(user4 === user);

