var wordPattern = function (pattern, s) {
  let words = s.split(' ')

  if (pattern.length !== words.length) return false

  let set = new Set()
  let map = new Map()

  for (let i = 0; i < pattern.length; i++) {
    let currletter = pattern[i]
    let currWord = words[i]

    if (!map.has(currletter) && !set.has(currWord)) {
      map.set(currletter, currWord)
      set.add(currWord)
    } else {
      if (map.get(currletter) !== currWord) return false
    }
  }

  return true
}

// console.log(wordPattern('abba', 'dog cat cat dog')) //true
console.log(wordPattern('abba', 'dog cat cat fish')) //false
// console.log(wordPattern('aaaa', 'dog cat cat dog')) //false
// console.log(wordPattern('abba', 'dog dog dog dog')) //false
