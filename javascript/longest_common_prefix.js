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
    // check if firstWord char does not equal to rest of words char
    // return common string up to that point
    for (let j = 1; j < strs.length; j++) {
      if (firstWord[i] !== strs[j][i]) {
        return common
      }
    }
    // add firstWord char at [i]
    common += firstWord[i]
  }

  // return common
  return common
}
