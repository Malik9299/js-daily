const fibonacciSequence = (nums) => {
  const fiboArr = [0, 1];
  let prevPrev = 0;
  let prev = 1;
  let next;

  for (let j = 2; j < nums; j++) {
    next = prev + prevPrev;
    fiboArr.push(next);
    prevPrev = prev;
    prev = next;
  }
  return fiboArr;
};
// console.log(fibonacciSequence(10));

const fibonacciSequenceRecursive = (resultArr = [0, 1], nums = 10) => {
  if (resultArr.length < nums) {
    resultArr.push(
      resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2]
    );
    fibonacciSequenceRecursive(resultArr);
  }
  return resultArr;
};
console.log(fibonacciSequenceRecursive());
