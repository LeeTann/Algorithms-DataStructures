function anagrams(word, words) {
  let output = []

  for (let item of words) {
    if (item.split('').sort().join('') === word.split('').sort().join('')) {
      output.push(item)
    }
  }

  return output
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
