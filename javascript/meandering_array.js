function meanderingArray(unsorted) {
  // Write your code here
  let meanderSort = []
  let sortedArr = unsorted.sort((a, b) => a - b, 0)
  let len = sortedArr.length
  let half = Math.floor(len / 2)

  for (let i = 0; i < half; i++) {
    meanderSort.push(sortedArr[len - 1 - i])
    if (len - 1 - i !== i) {
      meanderSort.push(sortedArr[len - i - 1])
    }
  }

  if (len % 2 !== 0) {
    meanderSort.push(sortedArr[half])
  }

  return meanderSort
}

console.log(meanderingArray([5, 2, 7, 8, -2, 25, 25]))
