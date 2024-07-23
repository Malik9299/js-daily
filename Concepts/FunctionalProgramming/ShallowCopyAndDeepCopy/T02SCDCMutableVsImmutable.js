// primitives are immutable
let myName = "Abdul";
myName[0] = "AA";

console.log(myName); // Abdul instead of AAbdul

// Reassignment is not the same as mutable

// It is reassignment not mutating
myName = "Malik";

console.log(myName); //Malik

// Structures contain mutable data

let xArray = [1, 2, 3];
let yArray = xArray;
yArray[0] = 9;

console.log(yArray); // [ 9, 2, 3 ]

console.log(xArray); // [ 9, 2, 3 ]
