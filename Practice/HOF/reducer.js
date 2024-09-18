console.log("Sum of array");
console.log([1, 2, 3, 4, 5].reduce((acc, item) => acc + item, 0));

const getMaximum = (a, b) => Math.max(a, b);
console.log("getMaximum ===> ", getMaximum(2, 3));

// console.log(
//   [1, 2, 3, 4, 5].reduce((acc, item) => {
//     console.log("acc ===> ", acc);
//     return acc + item;
//   }, 0)
// );

console.log("Max of array");

console.log([1, 2, 3, 4, 5].reduce(getMaximum, 50)); // 50
console.log([1, 2, 3, 4, 5].reduce(getMaximum, 0)); // 5
console.log([1, 2, 3, 4, 5].reduce(getMaximum)); // 5
console.log([5].reduce(getMaximum)); // 5
