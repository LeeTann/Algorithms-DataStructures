var findMin = function (nums) {
  if (nums.length === 1) return nums[0]

  let left = 0
  let right = nums.length - 1

  if (nums[right] > nums[0]) return nums[0]

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] < nums[right]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return nums[right]
}
