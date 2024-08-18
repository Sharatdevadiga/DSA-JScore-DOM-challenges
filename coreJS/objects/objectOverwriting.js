const user = {
  name: "Jhon",
  age: "24",
};

// OBJECT OVERWRITING
const user5 = { name: "jane", age: 44, city: "NewYork" };
const user6 = {};
Object.assign(user6, user, user5);
console.log(user6);
Object.assign(user5, user);
console.log(user5);
