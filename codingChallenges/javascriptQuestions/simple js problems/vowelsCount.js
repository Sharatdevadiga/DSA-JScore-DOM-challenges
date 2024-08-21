function voewlsCount(str) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let count = 0;

  for (let ch of str) {
    if (vowels.has(ch)) count++;
  }

  return count;
}

console.log(voewlsCount("hello world THIS IS vowels count"));

function vowelsCountRegex(str) {
  let regex = /[aeiou]/gi;
  let match = str.match(regex);
  return match.length;
}
console.log(vowelsCountRegex("hello world THIS IS vowels count"));
