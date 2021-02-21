function wordBreak(arr, pieces) {
  let strArr = arr.join('')

  for (let piece of pieces) {
    let strPiece = piece.join('')
    console.log(strPiece)
    if (!strArr.includes(strPiece)) {
      return false
    }
  }

  return true
}

console.log(wordBreak([1, 2, 4, 3], [[1], [4, 3], [2]])) //true
console.log(wordBreak([1, 2, 4, 3], [[1], [2], [3, 4]])) // false
// console.log(wordBreak([1, 1, 4, 3], [[1], [14], [4]]))
