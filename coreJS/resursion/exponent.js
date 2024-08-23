function expo(num, pow) {
  if (pow === 0) return 1;
  let res = num;

  function recursiveExpo(p = 1) {
    if (p === pow) return;

    res *= res;
    recursiveExpo(p + 1);
  }

  recursiveExpo(1);
  return res;
}

console.log(expo(2, 0));
