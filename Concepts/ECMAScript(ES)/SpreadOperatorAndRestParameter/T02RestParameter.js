// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. This is useful for functions that need to handle a variable number of arguments.

// In function definitions:

const operatorsFunction = (...params) => {
  console.log(params); //  [1, 2, 3, 4 ]
  console.log(...params); //  1 2 3 4
};

// operatorsFunction(1, 2, 3, 4);

const sum = (...params) => {
  return params.reduce((accum, current) => accum + current);
};

// const currySum = (x) => (y) => (z) => (a) => x + y + z + a;

const currySum = (...args1) => {
  const curried = (...args2) => {
    console.log("args1 =>", args1);
    console.log("args2 =>", args2);
    if (args2.length == 0) {
      console.log("===End===");
    } else {
      return currySum(...args1, ...args2);
    }
  };
  return curried;
};

// console.log(sum(1, 2, 3, 4)); // 10
// console.log(currySum(1)(2)(3)(4)); // 10

console.log(currySum(1)(2)(3)(4)());

const addTwo = (x) => x + 2;

const subOne = (x) => x - 1;

const multiplayThree = (x) => x * 3;

const addSubMul = (...functions) => {
  console.log(functions);
  //   [ [Function: addTwo], [Function: subOne], [Function: multiplayThree] ]
};

// addSubMul(addTwo, subOne, multiplayThree);
