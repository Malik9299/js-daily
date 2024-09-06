// Case 1
const multiDimArray = [1, [2, 3], [4, [5, 6]]]; // Input

const flattenedArray = [1, 2, 3, 4, 5, 6]; // Required Output

// console.log("Data ===> ", makeFlattenedArray(multiDimArray, []));

// Case 2
const multiDimArray2 = [1, [2, 3], [4, [5, 6, [2, 3]]]]; // Input

const flattenedArray2 = [1, 2, 3, 4, 5, 6, 2, 3]; // Required Output

// console.log("Data ===> ", makeFlattenedArray(multiDimArray2, []));

// Case 3

const multiDimArray3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const flattenedArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Required Output

const makeFlattenedArray = (array) => {
  return array.reduce((acc, item) => {
    console.log("acc ===> ", acc);
    return Array.isArray(item)
      ? acc.concat(makeFlattenedArray(item))
      : acc.concat(item);
  }, []);
};

// console.log("Data ===> ", makeFlattenedArray(multiDimArray3));

const arrays = [1, 2, 3, 4, 5];
const final = arrays.reduce((acc, curr) => {
  console.log("acc ===> ", acc);
  console.log("curr ===> ", curr);
  return acc + curr;
}, 100);
console.log(final); // Output: [1, 2, 3, 4, 5]
