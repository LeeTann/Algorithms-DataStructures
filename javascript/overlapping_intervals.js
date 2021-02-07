function removeOverlapInterval(intervals) {
  // sort by the ending time
  // set prev interval
  // keep track of count overlap
  // loop thru intervals starting at next interval which is 1
  // compare if prev end time > curr start time
  // increment count
  // else set prev = current interval and continue loop
  // return count
  intervals.sort((a, b) => a[1] - b[1])
  console.log(intervals)
  let prev = intervals[0]
  let count = 0

  for (let i = 1; i < intervals.length; i++) {
    if (prev[1] > intervals[i][0]) {
      count++
    } else {
      prev = intervals[i]
    }
  }

  return count
}

console.log(
  removeOverlapInterval([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
)

// console.log(
//   removeOverlapInterval([
//     [1, 2],
//     [1, 2],
//     [1, 2],
//   ])
// )
