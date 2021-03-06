var rob = function (nums) {
  if (nums === null || nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

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

console.log(rob([2, 7, 9, 3, 1]))
