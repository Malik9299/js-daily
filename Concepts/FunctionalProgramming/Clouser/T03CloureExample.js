// IIFE Immediately Invoked function Expression
const privateCounter = (() => {
  let count = 0;
  console.log(`Initial value of count: ${count}`);
  return () => {
    count += 1;
    console.log(`Incremented value of count: ${count}`);
  };
})();

// This Immediately Invoked Function Expression(IIFE) and called itself
// the result will be log is
// Initial value of count: 0
// if I call the function
privateCounter();
// The result will be
// Initial value of count: 0
// Incremented value of count: 1

// If we call again and again we will continue to counter

privateCounter();
privateCounter();
privateCounter();

// Initial value of count: 0
// Incremented value of count: 1
// Incremented value of count: 2
// Incremented value of count: 3
// Incremented value of count: 4

// here the count is a private variable, and can be accessed in child function through lexical scope

// Note: Initial value of count: 0 this statement log one time as it is the original function that called immediatly only returns one time
