// mutable reassignabe
let obj1 = {
  key: "val1",
};

obj1.key = "val2";
obj1 = {
  key: "val3",
};

console.log(obj1);

// mutable non reassignable
const obj2 = {
  key: "val1",
};
obj2.key = "val2";

// nonMutable reassignable
let obj3 = {
  val: "key1",
};
Object.freeze(obj3);

obj3 = {
  val: "kwy2",
};

// nonmutable nonreassignable
const obj4 = {
  key: "val1",
};
