function pivotIndex(nums) {
  let left = 0
  let right = nums.reduce((a, b) => a + b, 0)
  console.log(right)

  for (let i = 0; i < nums.length; i++) {
    right = right - nums[i]
    console.log(right)
    if (left === right) {
      return i
    } else {
      left = left + nums[i]
      console.log(left)
    }
  }

  return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
// console.log(pivotIndex([2, 1, -1]))
// console.log(pivotIndex([1, 2, 3]))
