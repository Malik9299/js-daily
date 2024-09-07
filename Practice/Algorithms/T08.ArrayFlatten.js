const makeFlattenedArray = (array, singleArray) => {
  for (let j = 0; j < array.length; j++) {
    if (Array.isArray(array[j])) {
      makeFlattenedArray(array[j], singleArray);
    } else {
      singleArray.push(array[j]);
    }
  }
  return singleArray;
};

// Case 1
const multiDimArray = [1, [2, 3], [4, [5, 6]]]; // Input

const flattenedArray = [1, 2, 3, 4, 5, 6]; // Required Output

console.log("Data ===> ", makeFlattenedArray(multiDimArray, []));

// Case 2
const multiDimArray2 = [1, [2, 3], [4, [5, 6, [2, 3]]]]; // Input

const flattenedArray2 = [1, 2, 3, 4, 5, 6, 2, 3]; // Required Output

console.log("Data ===> ", makeFlattenedArray(multiDimArray2, []));

// Case 3

const multiDimArray3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const flattenedArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Required Output

console.log("Data ===> ", makeFlattenedArray(flattenedArray3, []));
