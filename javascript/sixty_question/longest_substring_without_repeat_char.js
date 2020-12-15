var lengthOfLongestSubstring = function (s) {
  if (!s || s.length === 0) return 0

  let set = new Set()
  let maxSub = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      maxSub = Math.max(maxSub, set.size)
      right++
    } else {
      set.delete(s[left])
      left++
    }
  }

  return maxSub
}

console.log(lengthOfLongestSubstring('abcabcbb'))
