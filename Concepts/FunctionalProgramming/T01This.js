// 2) Method Call:
// When a function is called as a method of an object, this refers to the object.
var Emp = {
  name: "Malik",
  greet: function () {
    console.log(`My Name is : ${this.name}`);
  },
};
// Emp.greet();

// 3) Constructor Call:
// When a function is called with the new keyword, this refers to the newly created instance.

// function Person(name) {
//   this.name = name;
// }
// const Peerson1 = new Person("AG");
// console.log("Peerson1:==>", Peerson1.name);
// const Person2 = new Person("Awan");
// console.log("Peerson1:==>", Person2.name);

// (() => {
//   console.log("This:==>", this.name);
// })();

function Person() {
  this.age = 0;

  // Traditional function
  this.stName = "Malik AGA";
  function growUp(name) {
    // In non-strict mode, the growUp function will create its own `this` context
    // In strict mode, `this` would be undefined inside setInterval callback
    // this.age++;
    console.log("age:==>", this.age);
    console.log("stName:==>", this.stName);
    console.log("stName with arguments:==>", name);
  }
  growUp(this.stName);

  // Arrow function
  (() => {
    // `this` here is lexically inherited from `Person` constructor
    this.age++;
    console.log("age:==>", this.age);
    console.log("stName:==>", this.stName);
  })();
}

const p = new Person();

// Benefits of Arrow Functions

// Concise Syntax: Arrow functions have a shorter syntax compared to traditional function expressions, making the code more readable and concise.

// Lexical this: Arrow functions resolve the issue of this binding in nested functions, simplifying callback definitions and event handling.

// No arguments object: Arrow functions do not have their own arguments object, which means they inherit arguments from the enclosing scope.
