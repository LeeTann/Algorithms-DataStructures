// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

var firstUniqChar = function (s) {
  let hash = {}

  for (let char of s) {
    if (hash[char]) {
      hash[char] += 1
    } else {
      hash[char] = 1
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i
    }
  }

  return -1
}

console.log(firstUniqChar('loveleetcode'))
