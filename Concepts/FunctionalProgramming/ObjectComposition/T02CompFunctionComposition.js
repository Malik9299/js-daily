// ===============
// Function composition in JavaScript is a technique where you combine two or more functions to create a new function. The new function's output is the result of passing an initial input through the composed functions sequentially. This is akin to the mathematical concept of composing functions, where the result of one function becomes the input of the next.

// Basic Idea: If you have two functions, f and g, function composition allows you to create a new function h such that h(x) = g(f(x)).

const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;

const compose = (f, g) => {
  return (x) => {
    return f(g(x));
  };
};

const add5ThenMultiplyBy2 = compose(multiplyBy2, add5);
console.log(add5ThenMultiplyBy2(10));

console.log(compose(multiplyBy2, add5)(10));
