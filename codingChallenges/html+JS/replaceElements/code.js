let greetEl = document.querySelector(".greet");
console.log(greetEl);

let counter = 0;
const text = ["how are you", "welcome", "to our", "codaing challenge"];

greetEl.addEventListener("click", () => {
  greetEl.textContent = text[counter];
  if (counter === text.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
});
