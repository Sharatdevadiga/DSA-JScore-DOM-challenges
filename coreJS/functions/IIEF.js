(function greet() {
  console.log(`hello welcome!!`);
})();

(function greet(name) {
  console.log(`hello ${name}! welcome!! `);
})("Saitama");

const res = (function () {
  return 10;
})();
console.log(res);

(function log() {
  setTimeout(() => {
    console.log("This will execute after 1 sec");
  }, 1000);
})();
