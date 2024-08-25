function vectorProd(v1, v2) {
  return v1.reduce((sum, el, idx) => (sum += el * v2[idx]), 0);
}

let v1 = [1, 2, 3],
  v2 = [3, 4, -5];
console.log(vectorProd(v1, v2));

function test() {
  console.log("testing : test scope");

  if (2 === 2) {
    let a = 5;
    console.log(`${a}`);
  }
}

test();
