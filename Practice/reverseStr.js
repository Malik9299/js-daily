// const reversStr = (str) => {
//   const arr = str.split("");
//   const count = arr.length - 1;
//   const revArr = [];
//   for (let j = count; j >= 0; j--) {
//     revArr.push(arr[j]);
//   }
//   console.log(str === revArr.join("") ? "plindrom" : "Not");
// };

// reversStr("abcbad");

const fact = (n) => {
  // if (n == 0 || n == 1) {
  //   return 1;
  // }
  // return n * fact(n - 1);
  if (n == 0 || n == 1) {
    return 1;
  }
  let factorial = 1;
  for (let j = n; j > 1; j--) {
    factorial = factorial * j;
    console.log(factorial);
  }
  return factorial;
};

console.log(fact(5));
