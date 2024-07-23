const arraySum = (arr) => {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    console.log("var:==>", arr[j]);
    sum = sum + arr[j];
  }
  return sum;
};
const arr = [1, 2, 3, 7, 4, 8, 5];
console.log(arraySum(arr));
