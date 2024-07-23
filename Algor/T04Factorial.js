function factorialRecursive(num) {
  if (num < 0 || !Number.isInteger(num)) {
    return "num must be a positive integer";
  }
  if (num <= 1) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}

function factorialLoop(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    let fact = 1;
    for (let j = num; j > 0; j--) {
      fact = fact * j;
    }
    return fact;
  }
}

console.log(`factorialRecursive => ${factorialRecursive(5)}`);

console.log(`factorialLoop => ${factorialLoop(5)}`);
