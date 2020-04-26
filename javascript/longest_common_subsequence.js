// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 

// Constraints:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.

var longestCommonSubsequence = function(text1, text2) {
  // Create 2d array + 1 to deal with indexing out of bounds and return 0 for empty string
  let twoDArr = Array.from(new Array(text1.length + 1), () => new Array(text2.length + 1).fill(0))
  
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      // if the two char are the same, the current cell is the prev diagonal cell + 1
      if (text1[i - 1] === text2[j - 1]) {
        twoDArr[i][j] = twoDArr[i-1][j-1] + 1
      
      // else the current cell is the max of the left and top cell
      } else {
        twoDArr[i][j] = Math.max(twoDArr[i-1][j], twoDArr[i][j-1])
      }
    }
  }

  // answer is at the cell at bottom right corner
  return twoDArr[text1.length][text2.length]
};