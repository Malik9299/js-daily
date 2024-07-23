// Original nested array
// let nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// Outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9]
function FlattenArr(arr) {
  const newArr = [];
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
    for (let k = 0; k < arr[j].length; k++) {
      newArr.push(arr[j][k]);
    }
  }
  return newArr;
}
console.log(
  FlattenArr([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ])
);
