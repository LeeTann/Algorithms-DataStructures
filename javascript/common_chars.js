var commonChars = function (A) {
  let result = []
  let firstWordArr = A[0].split('')
  console.log(firstWordArr)

  for (let char of firstWordArr) {
    if (A.every((word) => word.includes(char))) {
      result.push(char)
      A = A.map((word) => word.replace(char, ''))
    }
  }

  return result
}

console.log(commonChars(['bella', 'label', 'roller'])) // ["e","l","l"]
