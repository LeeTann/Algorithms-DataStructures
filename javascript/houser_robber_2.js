var rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  let runningMax1 = nums.slice(0, nums.length - 1)
  let runningMax2 = nums.slice(1)

  function robHomes(arr) {
    let runningMax = []

    runningMax[0] = arr[0]
    runningMax[1] = Math.max(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++) {
      runningMax[i] = Math.max(arr[i] + runningMax[i - 2], runningMax[i - 1])
    }

    return runningMax[runningMax.length - 1]
  }

  return Math.max(robHomes(runningMax1), robHomes(runningMax2))
}
