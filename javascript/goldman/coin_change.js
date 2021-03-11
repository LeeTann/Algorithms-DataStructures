// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// DYNAMIC PROGRAMMING
const coinChange = (coins, amount) => {
  // dp[i] represents the least amount of coins that can make the value equals to the i
  const dp = Array(amount + 1).fill(amount + 1)
  console.log(dp)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        console.log(dp)
      }
    }
  }

  console.log(dp)
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3)) //3
