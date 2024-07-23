// =======================
// JavaScript is synchronous by default: every line of code is executed one after the other, and each task must wait for the previous one to be completed before moving to the next.
// Javascript always run from top to the bottom
// for Syncronus system
// You have 10 tasks and one hand then you will do one by one and you could not jump to task no 5 unless you complete the task no 1,2,3,4

console.log("Task No 1");
console.log("Task No 2");
console.log("Task No 3");
console.log("Task No 4");
console.log("Task No 5");

// But for Asyncronus system for the 10 tasks you will be given 10 hands, so that you can work independently without depending on anyone

console.log("Task No 1");
console.log("Task No 2");
console.log("Task No 3");
setTimeout(() => {
  // The setTimeout() method calls a function after a number of milliseconds.
  // The setTimeout() is executed only once.
  // If you need repeated executions, use setInterval() instead.

  // setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.

  console.log("Task No 4");
}, 3000);

console.log("Task No 5");
