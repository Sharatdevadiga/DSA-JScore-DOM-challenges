// ITS A PATTERN MATCHING ALGORITHM

function findOccurence(str, patern) {
  let m = str.length,
    n = pattern.length;
  let occurences = [];

  for (let i = 0; i <= m - n; i++) {
    let j;
    for (j = 0; j < n; j++) {
      if (str[i + j] !== pattern[j]) break;
    }
    if (j === n) {
      occurences.push(i);
    }
  }

  return occurences;
}

const str = "abcabdghtjkljabc,gabc";
const pattern = "abc";

console.log(findOccurence(str, pattern));
