function stringCount(str) {
  let hash = {}

  for (let char of str) {
    !hash[char] ? (hash[char] = 1) : hash[char]++
  }

  let keysArr = Object.keys(hash)

  let output = ''

  for (let i = 0; i < keysArr.length; i++) {
    output += keysArr[i]
    output += hash[keysArr[i]]
  }

  return output
}

console.log(stringCount('aabcdd')) // a3b1c1d2
