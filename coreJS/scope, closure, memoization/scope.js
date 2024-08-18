//GLOBAL AND LOCAL SCOPE
let greet = "hello"; // GLOBAL SCOPE

function greePerson(name) {
  let question = "How are you"; //LOCAL SCOPE
  console.log(`${greet} ${name}!!`);
  console.log(question);
}

console.log(greet);
greePerson("Thor");

// FUNCTION AND BLOCK SCOPE AND NESTED SCOPE
// var- function scope, (its also hoisted)
// let and const - block scope (not hoisted)
function scopeEg() {
  console.log(`accessing the var from outer function ${a}`);
  var a = 10;

  function helper() {
    let b = 20;
    const c = 30;
    console.log(`accessing the var from inner function ${a}`);
    console.log(`accessing the let from inner function ${b}`);
    console.log(`accessing the const from inner function ${c}`);
  }

  // console.log(b);
  // console.log(c);

  helper();
}
scopeEg();
