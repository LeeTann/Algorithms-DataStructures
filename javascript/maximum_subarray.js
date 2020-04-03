// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.




// keep track of currMax
// keep track of globalMax
// keep track of currMax between curr num or currMax + curr num
// check if currMax is greater then globalMax. if so, update global to equal currMax.
// after finishing our loop, return globalMax

let maxSubArray = function(nums) {
  let currentMax = nums[0]
  let currentGlobal = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let currNumber = nums[i]
    currentMax = Math.max(currNumber, currentMax + currNumber)

    if (currentMax > currentGlobal) {
      currentGlobal = currentMax
    }
  }

  return currentGlobal
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])