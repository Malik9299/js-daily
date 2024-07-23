// =============Prerequisite
// 1) Currying
// 2) Higher Order Functions
//

// =============Currying
// currying takes a function that recieves more than one parameter
// and breakes it into series of unry (one parameter) function
// therefore, a curried function only takes one parameter at a time
const curried = (x) => {
  return (y) => {
    return x * y;
  };
};

const curriedRefactor = (x) => (y) => x * y;

// const multiplyOne = curried(5);
// const multiplyTwo = curriedRefactor(5);

// console.log("multiplyOne");
// console.log(multiplyOne);
// console.log("multiplyTwo");
// console.log(multiplyTwo);

// console.log("multiplyOne(2)");
// console.log(multiplyOne(2));
// console.log("multiplyTwo(2)");
// console.log(multiplyTwo(2));

// =============Higher Order Functions

// Higher-order functions in JavaScript are functions that either take other functions as arguments, return functions as their result, or both.

// They are a fundamental concept in functional programming and allow for more abstract and concise code. Here are the main aspects of higher-order functions:

// 1) Taking Functions as Arguments: A higher-order function can accept one or more functions as parameters. This allows for functions that can be more dynamic and reusable.

// const heigherOrderFunction = (fn) => {
//   fn();
// };

// const sayHello = () => {
//   console.log("Hello");
// };

// heigherOrderFunction(sayHello);

// 2) Returning Functions: A higher-order function can return another function. This is usefull for creating functions dynamically.

// const heigherOrderFunction = (name) => {
//   return () => {
//     console.log(`Hello ${name}`);
//   };
// };
// const greet = heigherOrderFunction("Malik");
// greet();

// 3) Combining Both: Higher-order functions can both take functions as arguments and return functions.

const heigherOrderFunction = (fn, name) => {
  fn(name);
  return () => {
    console.log("This is higher order function");
  };
};

const greet = (userName) => {
  console.log(`Greetings...${userName}`);
};

const newFn = heigherOrderFunction(greet, "Malik");
newFn();

// Several built-in JavaScript functions are higher-order functions. Some common examples include:
// Array.prototype.map():
// Array.prototype.filter()
// Array.prototype.reduce():
