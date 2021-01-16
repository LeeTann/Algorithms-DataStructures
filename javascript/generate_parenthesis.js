var generateParenthesis = function (n) {
  if (n === 0) return []

  let result = []

  let generate = function (leftCount, rightCount, str) {
    if (leftCount + rightCount === 2 * n) {
      result.push(str)
      return
    }
    if (leftCount < n) {
      generate(leftCount + 1, rightCount, str + '(')
    }
    if (rightCount < leftCount) {
      generate(leftCount, rightCount + 1, str + ')')
    }
  }

  generate(0, 0, '')
  return result
}

console.log(generateParenthesis(3))
