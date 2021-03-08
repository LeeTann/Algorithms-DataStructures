function secondMin(arr) {
  let first = arr[0]
  let second = arr[1]

  for (let num of arr) {
    if (num <= first) {
      first = num
    }
    if (num >= first && num <= second) {
      second = num
    }
  }

  console.log(first, second)
}

console.log(secondMin([5, 3, 2, 1, 39, 44, -23, -23]))
