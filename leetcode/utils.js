export const sortNums = (nums) => {
  let lowest;
  let count = 0;
  for (let s = 0; s < nums.length; s++) {
    lowest = nums[s];

    for (let n = s + 1; n < nums.length; n++) {
      if (lowest > nums[n]) {
        lowest = nums[n];
      }
      count++;
    }
    // console.log("lowest after:==>", lowest);
    const index = nums.indexOf(lowest);
    nums[index] = nums[s];
    nums[s] = lowest;

    // console.log("nums added index:==>", nums);
  }
  console.log("sortNums count :==>", count);

  return nums;
};
export const sortNums2 = (nums) => {
  let temp;
  let sort;
  let count = 0;
  do {
    sort = false;
    for (let n = 0; n < nums.length; n++) {
      if (nums[n] > nums[n + 1]) {
        temp = nums[n];
        nums[n] = nums[n + 1];
        nums[n + 1] = temp;
        sort = true;
      }
      count++;
    }
  } while (sort);

  console.log("sortNums2 count :==>", count);

  return nums;
};
// const arr = [6, 2, 7, 3, 1, 8, 5, 4];
// 2, 6, 7, 3, 1, 8, 5, 4;
// 2, 6, 7, 3, 1, 8, 5, 4;
// 2, 6, 3, 7, 1, 8, 5, 4;
// 2, 6, 3, 1, 7, 8, 5, 4;
// 2, 6, 3, 1, 7, 8, 5, 4;
// 2, 6, 3, 1, 7, 5, 8, 4;
// 2, 6, 3, 1, 7, 5, 4, 8;

// 1, 3, 7, 2, 5, 8, 4, 6;
// sortNums2(arr);
// sortNums(arr);
export default { sortNums, sortNums2 };

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export
// export default function multiply(a, b) {
//   return a * b;
// }
