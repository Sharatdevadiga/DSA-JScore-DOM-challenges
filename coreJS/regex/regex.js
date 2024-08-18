let regex = /h+/gi;
const str = "hello world how are you";

console.log(regex.test(str));
console.log(regex.exec(str));

console.log(str.match(regex));
