// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index

// GREEDY SOLUTION - O(n) time and O(1) space
// var canJump = function(nums) {
//     let lastGoodIndex = nums.length - 1

//     for (let i = nums.length -1; i >= 0; i--) {
//       if (i + nums[i] >= lastGoodIndex) {
//         lastGoodIndex = i
//       }
//     }

//     return lastGoodIndex === 0
// };

// console.log(canJump([2,3,1,1,4]))

// Approach 1: BACTRACKING SOLUTION - O(n^2) time, O(n) space
// This is the inefficient solution where we try every single jump pattern 
// that takes us from the first position to the last. 
// We start from the first position and jump to every index that is reachable. 
// We repeat the process until last index is reached. When stuck, backtrack.

var canJump = function(nums) {
  return allPossibleJump(0, nums)
};

function allPossibleJump(curr_position, nums) {
  if (curr_position === nums.length - 1) {
    return true
  }

  let furthestJump = Math.min(curr_position + nums[curr_position], nums.length - 1)

  for (let nextPosition = furthestJump; nextPosition > curr_position; nextPosition--) {
    if (allPossibleJump(nextPosition, nums)) {
      return true
    }
  }
  
  return false
}

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
console.log(canJump([2,2,0,1]))