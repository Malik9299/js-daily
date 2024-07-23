const addTwo = (x) => x + 2;
const subtractOne = (x) => x - 1;
const multiplyByFive = (x) => x * 5;

// Notice how the functions executes from inside to outside & fro left to right
const result = multiplyByFive(subtractOne(addTwo(4)));

// console.log(result);

// The above is not a compose function - let's make one

// now make our own compose functions

// Note  in the library ramda.js and lodash have thier own built-in compose and pipe functions

// The higher order function "reduce" takes a list of values and applies a function to each of those values, accumulting a single result

// To get compose order from right to left as we see with nested function call in our above example, we need reduceRight

// const compose =
//   (...fns) =>
//   (val) =>
//     fns.reduceRight((prev, fn) => fn(prev), val);

// const composeEx2 =
//   (...functions) =>
//   (input) =>
//     functions.reduceRight((acc, fn) => fn(acc), input);

// const composeEx2 = (...functions) => {
//   console.log(functions);
//   return (input) => {
//     return functions.reduceRight((acc, fn) => {
//       console.log("fn:==>", fn);
//       console.log("acc:==>", acc);
//       return fn(acc);
//     }, input);
//   };
// };

console.log(
  [1, 2, 3].reduceRight((ac, cu) => {
    return ac + cu;
  }, 20)
);

const composeEx2 =
  (...functions) =>
  (val) => {
    return functions.reduceRight((acc, currentFunction) => {
      return currentFunction(acc);
    }, val);
  };

const add2 = (x) => x + 2;
const multiply5 = (x) => x * 5;
const subtract1 = (x) => x - 1;

const composedFunction = composeEx2(subtract1, multiply5, add2);
console.log(composedFunction);
const resultOne = composedFunction(5); // subtract(multiply(add(5))) = subtract(multiply(6)) = subtract(12) = 9
console.log(resultOne); // 34

// To do the same but read from left to right ... we use the pipe
// It is same except uses reduce instead of reduceRight

const pipe =
  (...functions) =>
  (val) =>
    functions.reduce((prev, fn) => fn(prev), val);

const pipeFunction = pipe(add2, multiply5, subtract1);

console.log(pipeFunction(5)); // 34
console.log(pipe(add2, multiply5, subtract1)(5)); // 34

// let we have another function

const divideBy = (divisor, num) => num / divisor;

console.log(pipe(add2, multiply5, subtract1, (x) => divideBy(2, x))(5)); // 17

// Using curry functions

const divBy = (divisor) => (num) => num / divisor;

const dividedBy2 = divBy(2);

console.log("dividedBy2:==>", dividedBy2(5)); // 2.5

console.log(pipe(add2, multiply5, subtract1, dividedBy2)(5)); // 17
