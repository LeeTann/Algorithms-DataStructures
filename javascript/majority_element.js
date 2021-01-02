var majorityElement = function (nums) {
  let hash = {}

  for (let num of nums) {
    if (!hash[num]) {
      hash[num] = 1
    } else {
      hash[num]++
    }
  }

  let max = Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b))
  return max
}
