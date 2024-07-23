const person = {
  name: "Ali",
  age: 38,
};

const student = {
  rollNo: "2k5cse145",
  grade: "A",
};

student.__proto__ = person;
const address = {
  street: 26,
  house: 41,
  __proto__: student,
};

console.log(address.name); // Ali
console.log(address.age); // 38
console.log(address.rollNo); // 2k5cse145
console.log(address.grade); // A
console.log(address.street); // 26
console.log(address.house); // 41
console.log(address); // { street: 26, house: 41 } to see the complete object of prototype see the result in browser's console

// One thing to be remember is that no circular references are allowed person.__proto__ can't be address
// other thing, the __proto__ value must be an object or null
// An object can onle directly inherit from one object

// If we log the the student
// console.log(student);

// see in the browser's output
// Important things are below
// {
//     "rollNo": "2k5cse145",
//     "grade": "A",
//     [[Prototype]]:
//     Object
//     age: 38
//     name: "Ali"
//     [[Prototype]]: Object
//     get __proto__: ƒ __proto__() // getter
//     set __proto__: ƒ __proto__() // setter
// }

// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__

// Object.setPrototypeOf(student, person);

// //  see the output in browser
// console.log(Object.getPrototypeOf(student));
// console.log(student.__proto__);
// console.log(Object.getPrototypeOf(student) === student.__proto__);
