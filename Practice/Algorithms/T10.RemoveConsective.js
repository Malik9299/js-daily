const RemoveElem = (arr) => {
  const stack = [];
  for (let j = 0; j < arr.length; j++) {
    if (stack.length > 0 && stack[stack.length - 1] === arr[j]) {
      stack.pop();
    } else stack.push(arr[j]);
  }
  return stack;
};
console.log(RemoveElem(["A", "B", "C", "C", "B", "A"]));
