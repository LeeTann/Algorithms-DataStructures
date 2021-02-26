function signalFilter(frequencies, ranges) {
  let maxBegin = -Infinity
  let minEnd = Infinity
  for (let [begin, end] of ranges) {
    maxBegin = Math.max(maxBegin, begin)
    minEnd = Math.min(minEnd, end)
  }

  let myArr = []
  let count = 0
  for (let i = 0; i < frequencies.length; i++) {
    if (frequencies[i] >= maxBegin && frequencies[i] <= minEnd) {
      myArr.push(frequencies[i])
      count++
    }
  }
}

signalFilter(
  [8, 15, 14, 16, 21],
  [
    [10, 17],
    [13, 15],
    [13, 17],
  ]
) // 2
