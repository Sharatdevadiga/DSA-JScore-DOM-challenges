function determine(num) {
  let res = "";

  if (num > 0) {
    res = "positive";
    if (num % 2 === 0) res += "-even";
  } else if (num < 0) {
    res = "negitive";
    if (num % 2 === 0) res += "-even";
  } else res = "neutral";

  return res;
}

console.log(determine(-30));
