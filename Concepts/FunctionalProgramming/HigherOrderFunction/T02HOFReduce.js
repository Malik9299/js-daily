const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 30;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// console.log(sumWithInitial);
// Expected output: 10

const getMax = (a, b) => {
  console.log("a:==>", a);
  console.log("b:==>", b);
  return Math.max(a, b);
};

// callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50));
// log:
// a:==> 50
// b:==> 1
// a:==> 50
// b:==> 100
// 100

// console.log([50].reduce(getMax, 10));
// log:
// a:==> 10
// b:==> 50
// 50

// // callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax));
// log:
// a:==> 1
// b:==> 100
// 100

// // callback is not invoked

console.log([50].reduce(getMax));

// 50
// [].reduce(getMax, 1); // 1

// [].reduce(getMax); // TypeError
