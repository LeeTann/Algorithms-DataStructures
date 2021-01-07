var maxArea = function (height) {
  let maxArea = 0
  let start = 0
  let end = height.length - 1

  while (start < end) {
    let width = end - start
    let minHeight = Math.min(height[start], height[end])
    let currMaxArea = width * minHeight
    maxArea = Math.max(maxArea, currMaxArea)

    if (height[start] < height[end]) {
      start++
    } else {
      end--
    }
  }

  return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) //49
console.log(maxArea([1, 2, 1])) //2
