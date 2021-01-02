var countConsistentStrings = function (allowed, words) {
  let count = 0
  let set = new Set(allowed)

  for (let word of words) {
    count += isAllowed(word)
  }

  return count

  function isAllowed(word) {
    for (let char of word) {
      if (!set.has(char)) {
        return 0
      } else {
        return 1
      }
    }
  }
}

console.log(
  countConsistentStrings('cad', [
    'cc',
    'acd',
    'b',
    'ba',
    'bac',
    'bad',
    'ac',
    'd',
  ])
)
