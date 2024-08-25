// REGEX IS AN OBJECT THAT DESCRIBES A SEQUENCE OF CHARACTERS USED FOR DEFINING A SEARCH PATTERN
let regex = /h+/gi;
const str = "hello world how are you";

console.log(regex.test(str));
console.log(regex.exec(str));
console.log(str.match(regex));

// RegExp method and 'g', 'i' flags
const word = "cat";
const regex2 = new RegExp(word, "gi");
const str2 = "Cat loves to eat fish. cat's have 4 legs";
console.log(regex2.test(str2));
console.log(regex2.exec(str2));
console.log(str2.match(regex2));
str2.replace(regex2, "dog");
console.log(str2);

// character sets []
const regex3 = /[cbf]at/gi;
const str4 = "fat cat saw the bat.";
console.log(str4.match(regex3));

// Ranges with character sets
const regex4 = /[a-z]at/gi;
const str5 = "fat cat saw the rat and a bat with a black hat";
console.log(str5.match(regex4));

/* CHARACTER CLAUSES
\d , \D, \w, \s \w{5}, \d{11}
*/

/* GROUPS
/BOOK(.COM?/gi
/@\w+\.\w{2,3}(\.\w{2,3})?/
*/

/* BRACKET AND NOT
[a-zA-Z0-9]
[^a-zA_Z0-9]
 */

/* ASSERTIONS
 1. BOUNDARY ASSERTIONS
 ^ -> niginning -> /^A/
 $ -> end of input -> /T$/
 \b -> boundary word
 \B -> non boundary word

2. POSITIVE ASSERTION
(?=pattern )-> lookahead -> followed
(?<=pattern) -> lookbehind -> preceeded

3. NEGATIVE ASSERTION
(?!pattern) -> negative lookahead -> not followed
(?<!pattern) -> negative lookbehind -> not preceeded
*/

// ALTERNATIVE -> | (PIPE) -> /S(A|I)T/ /APPLE/ORANGE/

/* FLAGS
i -> case incensitive
g -> global
m -> multiline matching
. -> match all
*/

/* WUANTIFIERS
* -> zero or more
+ -> one or more
? -> zero or one
{n} -> exact n
{n,} -> atleast n
{n, m} -> between n and m
 */
