function canFormArray(arr, pieces) {
  const map = new Map()

  arr.forEach((val, i) => map.set(val, i))
  console.log(map)

  for (let piece of pieces) {
    console.log(piece)

    if (!map.has(piece[0])) return false

    let index = map.get(piece[0])
    console.log(index)

    for (let i = 0; i < piece.length; i++) {
      let curIndex = i + index
      console.log(curIndex)
      console.log(piece[i])
      console.log(arr[curIndex])
      if (piece[i] !== arr[curIndex]) return false
    }
  }

  return true
}

console.log(canFormArray([1, 2, 5, 3], [[3], [1, 2], [5]])) // true
// console.log(canFormArray([1, 2, 5, 3], [[3], [2, 1], [5]])) // false
// console.log(canFormArray([1, 2, 5, 3], [1, 3], [2, 5]))
