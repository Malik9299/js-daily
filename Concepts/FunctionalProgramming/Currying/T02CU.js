const multiply = (x, y) => x * y;

// const curriedmMltiply = (x) => (y) => x * y;

const curriedmMltiply = (x) => {
  return (y) => {
    return x * y;
  };
};

// console.log("multiply(2, 3)");
// console.log(multiply(2, 3));

// console.log("curriedmMltiply(2)");
// console.log(curriedmMltiply(2)); // (y) => x * y

// console.log("curriedmMltiply(2)(3)");
// console.log(curriedmMltiply(2)(3)); // 6

// Now use the partial applied functions
// Partial applied function is the common use of currying

const timesTen = curriedmMltiply(10);

console.log("timesTen");
console.log(timesTen); // (y) => x * y
console.log(timesTen(5)); // 50
