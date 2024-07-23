const para =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const splitOnSpace = (string) => string.split(" ");
const count = (array) => array.length;

const pipe =
  (...functions) =>
  (val) =>
    functions.reduce((prev, fn) => fn(prev), val);

const wordCounter = pipe(splitOnSpace, count);

// console.log(wordCounter(para)); // 91
// console.log(wordCounter("The quick brown fox jumps over the lazy dog")); //  9

// Combine process : chck for palindrom

const part1 = "taco cat";
const part2 = "UFO tofu";
const part3 = "malik";

const split = (string) => string.split("");
const join = (array) => array.join("");
const lower = (string) => string.toLowerCase();
const reverse = (array) => array.reverse();

// console.log(lower(join(split(part1)))); // tacocat

const fwd = pipe(splitOnSpace, join, lower);
const rev = pipe(fwd, split, reverse, join);

console.log(fwd(part1) === rev(part1));
console.log(fwd(part2) === rev(part2));
// console.log(fwd(part3));
// console.log(rev(part3));
console.log(fwd(part3) === rev(part3));
