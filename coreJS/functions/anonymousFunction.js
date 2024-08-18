// ANONYMOUS FUNCTION
let sum = function (a, b) {
  return a + b;
};

// it can be used as an IIFE
let sumIIEF = (a, b) => {
  (function () {
    console.log(5 + 4);
  })();
};

console.log(sum(3, 4));
sumIIEF(3, 4);

// ANONYMOUS FUNCTION IN EVENTLISTENERS
let count = 0;
const button = document.querySelector(".button");
const textel = document.querySelector(".text");
button.addEventListener("click", function () {
  console.log("Button clicked");
  textel.textContent = `button clicked: ${count}`;
  count++;
});
