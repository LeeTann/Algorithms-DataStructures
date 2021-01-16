var removeDuplicateLetters = function (s) {
  const hash = {}
  const stack = []

  // loop thru array and keep count in hash
  for (let letter of s) {
    !hash[letter] ? (hash[letter] = 1) : hash[letter]++
  }

  for (let letter of s) {
    hash[letter]--

    if (stack.includes(letter)) continue

    while (
      stack &&
      letter < stack[stack.length - 1] &&
      hash[stack[stack.length - 1]] > 0
    ) {
      stack.pop()
    }

    stack.push(letter)
  }
  return stack.join('')
}

console.log(removeDuplicateLetters('cbacdcbc'))
