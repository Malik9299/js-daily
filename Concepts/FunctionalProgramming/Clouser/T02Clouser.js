// So what is the closure:
// A closure is a function having access to the parent scope, even after the parent function has closed.

// There are 2 parst of above defination

// A closure is a function having access to the parent scope,
// This above part is lexical scope

// even after the parent function has closed.
// This above part is the key point of closure

// Further explanation

// A closure is created when we define a function, not when a function is executed

// Let modify the above example

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

  // childFunction();
  return childFunction;
  //   do not call the child function, just return
};

// parentFunction();

// Now assign the parentFunctionOne() to a variable

const result = parentFunction();

// if we run the code we will find this result
// x =>  1
// myValue =>  2

// we don't get any result from the child function
// because we donot call the child function we just return the function
// see at line 35 return childFunction;

// now we can use the result to call the child function

// if we log the result

// console.log(result);

// x =>  1
// myValue =>  2
// () => {
//     console.log("x += 5:==>", (x += 5));
//     console.log("myValue += 1:==>", (myValue += 1));

//   }

// Now if we call the result as
result();

// The output will be
// x += 5:==> 6
// myValue += 1:==> 3

// Now if we call the result again

result();

// The output will be
// x =>  1
// myValue =>  2
// x += 5:==> 6
// myValue += 1:==> 3
// x += 5:==> 11
// myValue += 1:==> 4

// it continue to increament the values

console.log("last value of x = ", x);

// if try to log the myValue, it will give us the reference error because it is the private variable
// console.log("myValue = ", myValue); // myValue is not defined

// So this is closure because we have the access of parent scope even after the parent function has returned
