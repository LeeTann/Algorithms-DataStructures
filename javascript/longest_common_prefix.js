var longestCommonPrefix = function (strs) {
  let common = ''

  // Edge case if strs is empty return empty string.
  if (strs.length === 0) {
    return common
  }

  // Grab first word from array
  let firstWord = strs[0]

  // loop thru the chars of the first word
  for (let i = 0; i < firstWord.length; i++) {
    // loop thru the array starting at second word
    // check if firstWord char is equal to rest of words char
    // if it is add it to common string
    for (let j = 1; j < strs.length; j++) {
      if (firstWord[i] !== strs[j][i]) {
        return common
      }
    }
    common += firstWord[i]
  }
  return common
}
