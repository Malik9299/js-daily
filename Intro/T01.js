const result = () => {
  console.log({} == {}); // false
  console.log("" ?? "aaa"); // ""
  console.log("" || "aaa"); // aaa
};

// console.log(result());

const result1 = [1, 2, 3].reduce((acc, next) => {
  acc.push(next * 2);
  return acc;
}, []);

// console.log(result1); // [ 2, 4, 6 ]

const result2 = [1, 2, 3].reduce((acc, next) => {
  return acc + next;
});

// console.log(result2); // 6

const getMax = (a, b) => {
  console.log(a, b);
  return Math.max(a, b);
  // console will print
  // 50 1
  // 50 100
  // 100
};

console.log([1, 100].reduce(getMax, 50));
