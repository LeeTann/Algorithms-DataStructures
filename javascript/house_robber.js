var rob = function (nums) {
  // if no nums array return 0. Edge Case
  if (nums === null || nums.length === 0) {
    return 0
  }

  // if only 1 num in array return that 1st num. Edge case
  if (nums.length === 1) {
    return nums[0]
  }

  // Create a new array of the running totals
  // First one is just first num, Second one is the max between first vs. second.
  let runningTotal = []
  runningTotal[0] = nums[0]
  runningTotal[1] = Math.max(nums[0], nums[1])

  // Then we want to loop thru the rest started at 3rd position
  for (let i = 2; i < nums.length; i++) {
    // And get the max between the previous runningTotal vs. runningTotal-2 + the current number
    runningTotal[i] = Math.max(
      runningTotal[i - 1],
      runningTotal[i - 2] + nums[i]
    )
  }

  // return the last runningTotal to get the highest summed up value.
  return runningTotal[runningTotal.length - 1]
}
