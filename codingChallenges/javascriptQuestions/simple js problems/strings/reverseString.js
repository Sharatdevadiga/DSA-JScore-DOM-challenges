function reverse1(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

let str = "Hello";
console.log(reverse1(str));
console.log(reverse2(str));
