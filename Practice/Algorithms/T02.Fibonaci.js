// const FiboNaci = (arr, num) => {
//   let initArray;

//   if (typeof arr == "string") {
//     initArray = arr.split(",").map(Number); //Convert string array to number array
//   } else if (Array.isArray(arr)) {
//     initArray = arr.map(Number); // Ensure all elements are number
//   } else {
//     return "Invalid Arguments";
//   }
//   if (initArray.length < num) {
//     let sum = initArray[initArray.length - 1] + initArray[initArray.length - 2];
//     initArray.push(sum);
//     return FiboNaci(initArray, num);
//   }
//   return initArray;
// };
// console.log(FiboNaci([0, 1, 1], 9));
// console.log(FiboNaci([0, 1, "1"], 9));
// console.log(FiboNaci("0,1", 9));
// console.log(FiboNaci(99, 9));

const fibonaci = (num, input) => {
  let arr;
  if (typeof input == "string") {
    arr = input.split(",").map(Number);
  } else if (Array.isArray(input)) {
    arr = input.map(Number);
  } else {
    return "Invalid array";
  }
  if (arr.length < num) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibonaci(num, arr);
  }
  return arr;
};

console.log(fibonaci(9, "0,1"));
console.log(fibonaci(9, [0, 1]));
console.log(fibonaci(9, [0, "1"]));
console.log(fibonaci(9, 9));
