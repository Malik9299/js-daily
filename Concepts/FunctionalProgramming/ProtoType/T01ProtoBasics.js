// ================= Prototype ==========================

// In JavaScript, the term "prototype" refers to an object from which other objects can inherit properties and methods. Every JavaScript function has a prototype property, which is an object that is used to build the [[Prototype]] chain (also known as the prototype chain) for instances created by that function when used as a constructor.

// Prototypal Inheritance and prototype chain

// Prototypal inheritance and the prototype chain are both concepts in JavaScript related to how objects can inherit properties and methods from other objects. Here's a detailed explanation of each concept and how they differ:

// Prototypal Inheritance:
// Prototypal inheritance refers to the ability of an object to inherit properties and methods from another object. This is one of the ways to create and manage inheritance in JavaScript. Objects can inherit directly from other objects, without the need for class-based inheritance (like in classical inheritance).

// Prototype Chain:
// The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from their prototypes. When a property or method is accessed on an object, JavaScript will look for that property or method on the object itself. If it is not found, JavaScript will then look at the object's prototype (the object it inherits from), and then the prototype's prototype, and so on, until it either finds the property/method or reaches the end of the chain (usually Object.prototype).

const person = {
  name: "Ali",
  age: 38,
};

const student = {
  rollNo: "2k5cse145",
  grade: "A",
};

console.log("Without prototypal inheritance:");
console.log(student.rollNo); // 2k5cse145
console.log(student.name); // undefined

student.__proto__ = person;

console.log("After creating prototypal inheritance:");

console.log(student.rollNo); // 2k5cse145
console.log(student.name); // Ali

// what exactlly the js do, js looks the name property in student, and if it is no there, it goes to the next link in the chain that is person
// is called prototype chain

// that this through inheritance
// now person is the parent of student or the proto of student

// There is another way to create prototype

console.log("Another way to create prototypal inheritance:");

const student1 = Object.create(person);
student1.rollNo = "2k5cse146";
student1.grade = "B";

console.log(student1.rollNo);
console.log(student1.name);
