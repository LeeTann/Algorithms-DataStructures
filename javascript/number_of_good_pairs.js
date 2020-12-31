// Brute force O(N^2)
// var numIdenticalPairs = function (nums) {
//   let count = 0

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] === nums[j] && i < j) {
//         count++
//       }
//     }
//   }

//   return count
// }

// 0(N)
var numIdenticalPairs = function (nums) {
  let count = 0
  let hash = {}

  for (let num of nums) {
    if (!hash[num]) {
      hash[num] = 1
    } else {
      count = count + hash[num]
      hash[num]++
    }
  }

  return count
}

console.log(numIdenticalPairs([1, 2, 3, 1, 3, 3]))
