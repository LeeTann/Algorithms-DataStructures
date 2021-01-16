/*
Given an array of integers and a number, k, identify the kth
smallest integer in the array.

[0, 2, 4, 6],   k = 1,  => 2
[3, 2, 1],      k = 2,  => 3


[1, 2, 3]
nums[2]

[1, 2, 3, 1]

*/

const _ = require('lodash')

function getNums(nums, k) {
  let sortNums = nums.sort()

  return sortNums[k]
}

console.log(getNums([0, 2, 4, 6], 1))
console.log(getNums([3, 2, 1], 2))
