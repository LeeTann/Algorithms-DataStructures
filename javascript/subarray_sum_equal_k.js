// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

var subarraySum = function (nums, k) {
  if (nums.length === 0) {
    return 0
  }

  let count = 0
  let curr_sum = 0
  let hash = { 0: 1 }

  for (let i = 0; i < nums.length; i++) {
    curr_sum += nums[i]

    if (hash[curr_sum - k]) {
      count += hash[curr_sum - k]
    }
    if (hash[curr_sum]) {
      hash[curr_sum] += 1
    } else {
      hash[curr_sum] = 1
    }
  }
  console.log(count)
  return count
}

// var subarraySum = function (nums, k) {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j]
//       if (sum === k) {
//         count++
//       }
//     }
//   }

//   return count
// }

console.log(subarraySum([1, 0, 1, 2, -1], 2)) // 4
