var permute = function (nums) {
  let output = []
  if (nums.length === 0) return [[]]
  if (nums.length === 1) return [[nums[0]]]

  for (let i = 0; i < nums.length; i++) {
    let copyNums = [...nums]
    copyNums.splice(i, 1)

    let rest = permute(copyNums)
    for (let j = 0; j < rest.length; j++) {
      output.push([nums[i], ...rest[j]])
    }
  }

  return output
}
