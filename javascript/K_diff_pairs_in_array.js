var findPairs = function (nums, k) {
  let count = 0
  let hash = {}
  let set = new Set(nums)

  for (let num of nums) {
    if (!hash[num]) {
      hash[num] = 1
    } else {
      hash[num]++
    }
  }

  set.forEach((num) => {
    if (k > 0 && set.has(num + k)) {
      count++
    } else if (k == 0 && hash[num] > 1) {
      count++
    }
  })

  return count
}
