// var isAnagram = function (s, t) {
//   if (!s || !t) return false
//   if (s.length !== t.length) return false

//   sortedS = s.split('').sort().join('')
//   sortedT = t.split('').sort().join('')

//   return sortedS === sortedT
// }

var isAnagram = function (s, t) {
  if (!s || !t) return false
  if (s.length !== t.length) return false

  let hash = {}

  for (let char of s) {
    if (!hash[char]) {
      hash[char] = 1
    } else {
      hash[char]++
    }
  }

  for (let char of t) {
    if (!hash[char]) {
      return false
    } else {
      hash[char]--
    }
  }

  for (let key in hash) {
    if (hash[key] !== 0) {
      return false
    }
  }

  return true
}

console.log(isAnagram('anagram', 'nagaram'))
