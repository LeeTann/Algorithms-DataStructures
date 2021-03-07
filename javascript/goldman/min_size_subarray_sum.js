// Sliding Window two pointer approach

// keep track of left, right, sum, minLength
// while right pointer is less than length of array
// keep updating sum = sum + array[num]
// check while sum >= target
// update minLength = (minLength, currSubarrayLength) ..... currSubarrayLength = right - left + 1
// update sum = sum - array[left] .... since we are now going to increment left
// increment left
// increment right
// if minLength still === Infinity that means it hasn't change, return 0. else return minLength

function subArrLength(target, nums) {
  let left = 0
  let right = 0
  let sum = 0
  let minLen = Infinity

  while (right < nums.length) {
    sum = sum + nums[right]

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1)
      sum = sum - nums[left]
      left++
    }

    right++
  }

  return minLen === Infinity ? 0 : minLen
}

console.log(subArrLength(7, [2, 3, 1, 2, 4, 3])) // 2
