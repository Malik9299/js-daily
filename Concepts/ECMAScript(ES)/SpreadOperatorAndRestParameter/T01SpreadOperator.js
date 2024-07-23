// The spread operator allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. It is also used to spread properties of an object.

// For Array
const numbers = [1, 2, 3];
console.log(numbers); // [ 1, 2, 3 ]
console.log(...numbers); // 1 2 3
console.log(Math.max(...numbers)); // 3
const numbers2 = [...numbers, 4, 5, 6];
console.log(numbers2); // [ 1, 2, 3, 4, 5, 6 ]
console.log(...numbers2); // 1 2 3 4 5 6

// For String
const str = "abcd";
console.log(str); // abcd
console.log(...str); // a b c d

// For Object
const obj = { id: 1, name: "Malik", age: 38 };
console.log(obj); // { id: 1, name: 'Malik', age: 38 }
const obj2 = { ...obj, designation: "SSE" };
console.log(obj2); // { id: 1, name: 'Malik', age: 38, designation: 'SSE' }
// console.log(...obj);
// TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
// The error occurs because the spread operator (...) can only be used on iterables (like arrays, strings, or other objects that implement the Symbol.iterator method), but plain objects in JavaScript are not iterable.
