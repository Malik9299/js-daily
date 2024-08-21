/**
 * ================Link
 * https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * ================Explanation
 * 
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 * 
 * 
 * 
 */

var merge = function (nums1, m, nums2, n) {
  const mergedArray = [];
  for (let j = 0; j < nums1.length; j++) {
    if (nums1[j] > 0) {
      mergedArray.push(nums1[j]);
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    if (nums2[j] > 0) {
      mergedArray.push(nums2[j]);
    }
  }

  for (let j = 0; j < mergedArray.length; j++) {
    let swapped;
    do {
      swapped = false;
      if (mergedArray[j] > mergedArray[j + 1]) {
        let temp = mergedArray[j];
        mergedArray[j] = mergedArray[j + 1];
        mergedArray[j + 1] = temp;
        swapped = true;
      }
    } while (swapped);
  }

  return mergedArray;
};

const test1Nums1 = [1, 2, 3, 0, 0, 0],
  m1 = 3,
  test1Num2 = [2, 5, 6],
  n1 = 3;
console.log(merge(nums1, m, nums2, n));

const test2Nums1 = [1],
  m2 = 1,
  test2Nums2 = [],
  n = 0;
console.log(merge(nums1, m, nums2, n));

const test3Nums1 = [0],
  m3 = 0,
  test3Nums2 = [1],
  n3 = 1;
console.log(merge(nums1, m, nums2, n));
