var moveZeroes = function (nums) {
  let x = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[i], nums[x]] = [nums[x], nums[i]]
      x++
    }
  }

  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
