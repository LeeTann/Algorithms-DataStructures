// start at fist one and go to every other node and collect total
// start at second node and go to every other node and collet that total
// compare the totals and take the highest value
var rob = function (nums) {
  if (!nums) return 0

  let maxOdd = 0
  let maxEven = 0
  for (let i = 0; i < nums.length; i + 2) {
    maxOdd += nums[i]
  }

  console.log(maxOdd)
}

rob([1, 2, 3, 1])

// var rob = function (nums) {
//   if (nums.length === 0 || nums === null) {
//     return 0
//   }

//   if (nums.length === 1) {
//     return nums[0]
//   }

//   let runningMax = []
//   runningMax[0] = nums[0]
//   runningMax[1] = Math.max(nums[0], nums[1])

//   for (let i = 2; i < nums.length; i++) {
//     runningMax[i] = Math.max(runningMax[i - 1], runningMax[i - 2] + nums[i])
//   }
//   console.log(runningMax)
//   return runningMax[runningMax.length - 1]
// }

// rob([1, 2, 3, 1])
