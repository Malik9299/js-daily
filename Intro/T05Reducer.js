console.log(
  [1, 2, 3].reduce((accumulator, currtentValue) => accumulator + currtentValue)
);
// 6
console.log(
  [1, 2, 3].reduce(
    (accumulator, currtentValue) => accumulator + currtentValue,
    30
  )
);
// 36

const getMaxVal = (a, b) => Math.max(a, b);
// console.log([1, 10].reduce(getMaxVal, 50));
// 50
// console.log([1, 40].reduce((a, b) => Math.max(30)));
// 30
// console.log([1, 40].reduce((a, b) => Math.max(a, b)));
// 40

// providded 5, first add 3 and then multiply 6

const addThree = (x) => x + 3;
const multiplyBySix = (x) => x * 6;

const addThenMultiply = (f1, f2) => {
  return (x) => f1(f2(x));
};
console.log(addThenMultiply(multiplyBySix, addThree)(5));

// Now subtract 3 from final result, also you dont know that how many functions passed to composeFun

const subtractThree = (x) => x - 3;

const composeFun = (...fns) => {
  return (val) => {
    return fns.reduceRight((prev, fn) => fn(prev), val);
  };
};
console.log(composeFun(subtractThree, multiplyBySix, addThree)(5));
