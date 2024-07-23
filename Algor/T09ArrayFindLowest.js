function findlowest(arr) {
  let lowest = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (lowest > arr[j]) {
      lowest = arr[j];
    }
  }
  return lowest;
}

console.log(findlowest([4, 3, 7, 2, 1]));
