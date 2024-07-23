// https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
    // if (args.length > 4) {
    //   return `The third argument is: ${args[2]}`;
    // } else {
    //   return args;
    // }
  };
};

const f = createHelloWorld();
console.log(f({ Name: "Malik" }, null, 42));
console.log(f(["AG", 77]));
