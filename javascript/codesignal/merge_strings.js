// Given two strings a and b, merge the strings so that the letters are added in alternating order
// starting with string a. If one string is longer than the other, then append the letters to the end of the merged string.
// ex. "abcd", "efghi" -> "aebfcgdhi"
// ex. "", "abcd" -> "abcd"
// ex. "abcdefg", "zxy" -> "azbxycdefg"

function mergeString(a, b) {
  let result = ''
  let i = 0

  while (i < a.length || i < b.length) {
    if (i < a.length) result += a[i]
    if (i < b.length) result += b[i]
    i++
  }

  return result
}

console.log(mergeString('abcd', 'efghi'))
console.log(mergeString('', 'abcd'))
console.log(mergeString('abcdefg', 'zxy'))
