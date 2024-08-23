function reverse(str) {
  let res = "";

  function recursiveRev(i) {
    if (i < 0) return;

    res += str[i];
    recursiveRev(i - 1);
  }

  recursiveRev(str.length - 1);
  return res;
}

console.log(reverse("Hello"));
