const numGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
};

let gen = numGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

let numGenerator2 = function* () {
  let i = 0;

  while (true) {
    yield i++;
  }
};
let gen2 = numGenerator2();
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
