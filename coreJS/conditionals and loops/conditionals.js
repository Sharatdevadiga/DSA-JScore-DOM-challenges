let x = 25;
let b;
let c = false;

// SIMPLE IF
if (x > 20) b = true;
b;

// FI ELSE
if (x > 20) b = true;
else b = false;
b;

// IF ELSE IF
if (x > 20) b = true;
else if (x === 20) c = true;
else b = false;
b;
c;

// NESTED IF
if (x > 20) {
  if (x === 25) c = true;
}
c;

// SWITCH STATEMENT
let ovel = "i";
let switchRes = "";

switch (ovel) {
  case "a":
    switchRes = "a";
    break;
  case "e":
    switchRes = "e";
    break;
  case "i":
    switchRes = "i";
    break;
  case "o":
    switchRes = "o";
  case "u":
    switchRes = "u";
  default:
    switchRes = "not an ovel";
}
switchRes;

// TERNARY OPERATOR
let age = 30;
let isAdult = age > 18 ? true : false;
isAdult;

// NESTED TERNARY
let isAdultAndEvenAge = age > 18 ? (age % 2 === 0 ? true : false) : false;
isAdultAndEvenAge;
