// POSITIONAL ARGUMENTS
function greet(name, age) {
  console.log(`hello ${name} you are ${age} years old`);
}
greet("king", 34);

// NAMED ARGUMENTS
function greet2(name, age) {
  console.log(`hello ${name} you are ${age} years old`);
}
greet2((age = 20), (name = "saitama"));

// NAMED ARGUMENTS WITH OBJECT
function greet3({ name, age }) {
  console.log(`hello ${name} you are ${age} years old`);
}
greet3({ age: 20, name: "saitama" });
