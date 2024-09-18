const fibo = (num: number, input: (number | string)[] | string) => {
  let arr: number[];
  if (typeof input == "string") {
    arr = input.split(",").map(Number);
  } else if (Array.isArray(input)) {
    arr = input.map(Number);
  } else {
    return "Invalid array";
  }
  if (arr.length < num) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibo(num, arr);
  }
  return arr;
};

console.log(fibo(9, "0,1"));
console.log(fibo(9, [0, 1]));
console.log(fibo(9, [0, "1"]));
