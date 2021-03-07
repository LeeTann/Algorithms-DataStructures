// for each current block, we can calculate the water level by getting the
// min of the highest left block and highest right block minus the curr block height.

var trap = function (height) {
  const len = height.length
  const leftMax = new Array(len)
  const rightMax = new Array(len)
  let water = 0

  leftMax[0] = height[0]
  rightMax[len - 1] = height[len - 1]
  console.log(leftMax)
  console.log(rightMax)

  // find the height of left wall for each elevation
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
  }
  console.log(leftMax)
  // find the height of right wall for each elevation
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
  }
  console.log(rightMax)
  // the height of the water for each elevation would be the
  // the height of the shorter wal minus the elevation height
  for (let i = 0; i < len; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i]
    console.log(water)
  }

  return water
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
// console.log(trap([4, 2, 0, 3, 2, 5])) //9
