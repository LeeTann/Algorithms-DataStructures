var firstUniqChar = function (s) {
  let hash = {}

  for (let char of s) {
    !hash[char] ? (hash[char] = 1) : hash[char]++
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i
    }
  }

  return -1
}

console.log(firstUniqChar('loveleetcode'))
