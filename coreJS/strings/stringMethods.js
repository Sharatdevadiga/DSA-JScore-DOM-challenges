let str = "Hello world";

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.indexOf("w"));

let str2 = " How are you?";
console.log(str.concat(str2));

let strPart = str.slice(0, 5);
console.log(strPart);

console.log(str.charAt(3));
console.log(str.charCodeAt(0));

let replaced = str.replace("e", "@");
console.log(replaced);

let words = str.split(" ");
console.log(words);

let str3 = " this is a string  ";
console.log(str3.trim());

let a = 400;
console.log(String(a));

console.log(`hello \" `);
