// https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/description/
// 1296. Divide Array in Sets of K Consecutive Numbers

// Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers.

// Return true if it is possible. Otherwise, return false.

// ============== Example 1:===========================

// Input: nums = [1,2,3,3,4,4,5,6], k = 4
// Output: true
// Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].

// ========================================================

// ============== Example 2:===============================

// Input: nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
// Output: true
// Explanation: Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].

// ========================================================

// ============== Example 3:===============================

// Input: nums = [1,2,3,4], k = 3
// Output: false
// Explanation: Each array should be divided in subarrays of size 3.

// ========================================================

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
import { sortNums } from "./utils.js";
const isPossibleDivide = function (nums, k) {
  const count = {};
  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  const sortedNums = Object.keys(count)
    .map(Number)
    .sort((a, b) => a - b);

  // console.log("sortNums:==>", sortNums(nums));

  for (let num of sortedNums) {
    if (count[num] > 0) {
      let need = count[num];
      for (let i = 0; i < k; i++) {
        if ((count[num + i] || 0) < need) {
          return false;
        }
        count[num + i] -= need;
      }
    }
  }

  return true;
};

export default isPossibleDivide;
