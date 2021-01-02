var threeSum = function (nums) {
  let result = []
  let set = new Set()

  nums.sort((a, b) => a - b)
  console.log('nums array', nums)

  if (nums.length < 3 || !nums) return []

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1
    let end = nums.length - 1
    let sum = 0

    while (start < end) {
      sum = nums[i] + nums[start] + nums[end]

      if (sum === 0) {
        let data = `${nums[i]}${nums[start]}${nums[end]}`
        console.log(data)
        if (!set.has(data)) {
          set.add(data)
          result.push([nums[i], nums[start], nums[end]])
        }
      }

      if (sum > 0) {
        end--
      } else if (sum < 0) {
        start++
      } else {
        start++
        end--
      }
    }
  }

  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, 2]))
