function numDecodings(s) {
  if (s.length === 0) return 0
  if (s[0] === '0') return 0

  const dp = Array(s.length + 1).fill(0)

  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= s.length; i++) {
    const a = Number(s.slice(i - 1, i))
    console.log(a)
    if (a >= 1 && a <= 9) {
      dp[i] += dp[i - 1]
    }

    const b = Number(s.slice(i - 2, i))
    console.log(b)
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2]
    }
  }
  console.log(dp)
  return dp[s.length]
}

// console.log(numDecodings('06'))
// console.log(numDecodings('12'))
console.log(numDecodings('226'))
