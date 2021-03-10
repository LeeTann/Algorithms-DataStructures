// keep track of max, prevMax, and jumpCount
// get max of (max, nums[i] + i). this tells us how far we can jump
// check if index we are on is equal to prevMax
// increment jumpCount since we reach max we can jump, set prevMax = max

// ** MIN JUMP TO REACH LAST INDEX ** //

var jump = function (nums) {
  let max = 0
  let prevMax = 0
  let jump = 0

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i])

    if (i == prevMax) {
      jump++
      prevMax = max
    }
  }
  return jump
}

console.log(jump([2, 3, 1, 1, 4]))
