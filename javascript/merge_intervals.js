var merge = function (intervals) {
  const sortedInt = intervals.sort((a, b) => a[0] - b[0])
  const output = [sortedInt[0]]

  for (let [start, end] of intervals) {
    if (output[output.length - 1][1] >= start) {
      let [prevStart, prevEnd] = output.pop()
      output.push([prevStart, Math.max(end, prevEnd)])
    } else {
      output.push([start, end])
    }
  }

  return output
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
)

console.log(
  merge([
    [8, 10],
    [1, 3],
    [2, 9],
  ])
)
