// josn cannot have a function inside it;
let data = [
  {
    entry1: "value1",
    entry2: "value2",
  },
  NaN,
  Infinity,
  -Infinity,
  undefined,
];

// SERIALIZATION
let str = JSON.stringify(data);
str;

// DESERIALIZATION
let json = JSON.parse(str);
json;
