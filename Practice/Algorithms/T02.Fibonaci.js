const FiboNaci = (arr, num) => {
  let initArray;

  if (typeof arr == "string") {
    initArray = arr.split(",").map(Number); //Convert string array to number array
  } else if (Array.isArray(arr)) {
    initArray = arr.map(Number); // Ensure all elements are number
  } else {
    return "Invalid Arguments";
  }
  if (initArray.length < num) {
    let sum = initArray[initArray.length - 1] + initArray[initArray.length - 2];
    initArray.push(sum);
    return FiboNaci(initArray, num);
  }
  return initArray;
};
console.log(FiboNaci([0, 1, 1], 9));
console.log(FiboNaci([0, 1, "1"], 9));
console.log(FiboNaci("0,1", 9));
console.log(FiboNaci(99, 9));
