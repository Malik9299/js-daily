// ==============
// Lexical scope defines how veriable names are resolved in nested function
// If we have a child function with in a parent function, the child function has access to the scope of a parent function and has access to the global scope
// Means Nested (child) function have access to the scope of their parent functions

// global
let x = 1;

const parentFunction = () => {
  // local scope
  let myValue = 2;
  console.log("x => ", x);
  console.log("myValue => ", myValue);

  const childFunction = () => {
    console.log("x += 5:==>", (x += 5));
    console.log("myValue += 1:==>", (myValue += 1));
    // The child function has access to the values of its parent function and the global scope
    // This is lexical scope
  };

  //   Call of child function in the parent function
  childFunction();
};

parentFunction();

// Output
// x =>  1
// myValue =>  2
// x += 5:==> 6
// myValue += 1:==> 3
// This all procedure is not a closure, it is the example of lexical scope
