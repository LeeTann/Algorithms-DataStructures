// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

var search = function(nums, target) {
    
  if (nums === null || nums.length === 0) {
      return -1
  }
  
  let left = 0
  let right = nums.length - 1
  
  // find the pivot
  while (left < right) {
    let midpoint = Math.floor((left + right) / 2)  
    // we know we've found pivot because mid can't be greater then last number in array
    if (nums[midpoint] > nums[right]) {
      left = midpoint + 1
    } else {
      right = midpoint
    }
  }

  // after we break from the loop, we found the pivot in left (which is the min num)
  let pivot = left
  // if target is less than last num, do a BS from pivot to last num (right side)
  if (target <= nums[nums.length - 1]) {
    return binary_search(nums, target, pivot, nums.length -1)
    // else do a BS from start to pivot - 1 (left side)
  } else {
    return binary_search(nums, target, 0, pivot - 1)
  }
  
  function binary_search(nums, target, left, right) {
    while (left <= right) {
      let midpoint = Math.floor((left + right) / 2) 

      if (nums[midpoint] === target) {
        return midpoint
      } 
      if (nums[midpoint] < target) {
        left = midpoint + 1
      } else {
        right = midpoint - 1
      }
    }

    return -1
  }

};

console.log(search([4,5,6,7,0,1,2], 6)) // 2