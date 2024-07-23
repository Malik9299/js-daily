const arrayMaximum = (arr) => {
  let maximum = arr[0];
  for (let j = 1; j < arr.length - 1; j++) {
    if (maximum < arr[j]) {
      maximum = arr[j];
    }
  }
  return maximum;
};
const arr = [35, 50, 25, 80, 20, 90, 45];
console.log(arrayMaximum(arr));
