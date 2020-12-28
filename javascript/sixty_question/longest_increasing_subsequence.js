var lengthOfLIS = function (nums) {
  // keep track of maxSum
  // length = 0
  // loop thru the array and see if curNum < nextNum
  // if yes increase length ++
  //

  let sumArr = []
  let len = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      sumArr.push(nums[i])
      len++
    } else {
      nums.splice(nums[i + 1])
    }
  }

  return len
}

console.log(lengthOfLIS([[0, 1, 0, 3, 2, 3]]))

// 0 < 1 increase length. set 1 to curNum
// 1 < 0 pop off 0
// 1 < 3 increase length. set 3 to curNUm
// 3 < 2 pop off 2. check if maxSum [0,1,3] > [0,1,2] set maxSum = [0,1,2]
