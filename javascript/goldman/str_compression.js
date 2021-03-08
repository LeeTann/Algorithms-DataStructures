// Given a string replace the largest repeated substring at every point with an asterisk(*).
// The goal is end result should be a minimal length string after compression

// For example, s = "abcabcd" should become "abc*d",
// Reason: we know abc has repeated twice, so replace the entire second instance of abc with an *.

// and if s = "aabbaabb" it should become "a*bb*", Reason: At index 1, a is repeated twice so put an * there,
// and aabb has repeated twice so replace it's second instance with an *.
// In this example we don't put an * right after b at index 3 because aab* would represent aabaab, but that isn't the case.

function compressString(str) {
  let ans = ''
  let i = 0

  while (i < str.length) {
    console.log(str.slice(0, i + 1))
    console.log(str.slice(i + 1, 2 * i + 2))
    if (str.slice(0, i + 1) === str.slice(i + 1, 2 * i + 2)) {
      ans += str[i] + '*'
      console.log(ans)
      i += i + 2
    } else {
      ans += str[i]
      console.log(ans)
      i += 1
    }
  }

  return ans
}

console.log(compressString('abcabcd'))
// console.log(compressString('aabbaabb'))
