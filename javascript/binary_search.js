var search = function (nums, target) {
  if (!nums.includes(target)) return -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) return mid

    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
}
