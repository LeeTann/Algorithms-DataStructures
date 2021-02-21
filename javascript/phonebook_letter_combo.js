function letterCombination(digits) {
  if (digits.length === 0) return []

  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  let result = []
  let index = 0
  let str = ''

  function permutation(index, str) {
    if (index === digits.length) {
      result.push(str)
      return
    }

    for (let char of map[digits[index]]) {
      console.log(char)
      permutation(index + 1, str + char)
    }
  }

  permutation(index, str)

  return result
}

console.log(letterCombination('23'))
// console.log(letterCombination(''))
// console.log(letterCombination('2'))
