var isValid = function (s) {
  let opening = '({['
  let validPairs = { ')': '(', '}': '{', ']': '[' }
  let stack = []

  for (let char of s) {
    if (opening.includes(char)) {
      stack.push(char)
    } else {
      if (stack.length === 0) return false

      let poppedItem = stack.pop()
      if (poppedItem !== validPairs[char]) return false
    }
  }

  return stack.length === 0
}
