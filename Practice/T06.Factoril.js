const fact = (num) => {
  let res = 1;
  for (let j = num; j > 0; j--) {
    res = res * j;
  }
  return res;
};
// console.log("Data ===> ", fact(5));

const factRec = (num) => {
  if (num < 1) {
    return 1;
  } else {
    return num * factRec(num - 1);
  }
};

console.log("Data ===> ", factRec(5));
