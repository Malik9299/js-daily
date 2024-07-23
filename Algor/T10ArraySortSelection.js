const selectionSort = (arr) => {
  for (let k = 0; k < arr.length; k++) {
    let lowest = arr[k];

    for (let j = k + 1; j < arr.length; j++) {
      if (lowest > arr[j]) {
        lowest = arr[j];
      }
    }
    const index = arr.indexOf(lowest);
    let temp = arr[k];
    arr[k] = arr[index];
    arr[index] = temp;
  }
  return arr;
};
console.log(selectionSort([4, 3, 7, 2, 1]));
