const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] > arr[k + 1]) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};
// const bubbleSort = (arr) => {
//   let swapped = true;
//   while (swapped) {
//     swapped = false;
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[k] > arr[k + 1]) {
//         let temp = arr[k];
//         arr[k] = arr[k + 1];
//         arr[k + 1] = temp;
//         swapped = true;
//       }
//     }
//   }

//   return arr;
// };
// console.log(bubbleSort([4, 3, 7, 2, 1]));

const bubbleSortq = (arr) => {
  let swapped;
  do {
    swapped = false;
    let n = arr.length;
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    n--;
  } while (swapped);
  return arr;
};
console.log(bubbleSortq([4, 7, 9, 1, 3, 0, 88, 33]));
