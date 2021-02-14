// A String is called balanced when every letter occurring in the string, appears both in upper- and lowercase.
// For example, the string "CATattac" is balanced ('a','c' and 't' occur in both cases), but "Madam" is not ('d' and 'a' appear only in lowercase).
// Note that the number of occurrences does not matter.

// Write a function:

// class Solution { public int solution (string S); }

// that, given a string S of length N, returns the length of the shortest balanced fragment of S.
// If S does not contain any balanced fragments, the function should return -1.

// Examples:

// 1. Given S = "azABaabza", the function should return 5. The shortest balanced fragment of S is "ABaab".
// 2. Given S = "TacoCat", the function should return -1. There is no balanced fragment.
// 3. Given S = "AcZCbaBz", the function should return 8. The shortest balanced fragment is the whole string.
// 4. Given S = "abcdefghijklmnopqrstuvwxyz", the function should return -1

function Solution(S) {
  let upper = new Set()
  let lower = new Set()

  for (let char of S) {
    if (char == char.toUpperCase()) {
      upper.add(char)
    } else {
      lower.add(char)
    }
  }
  console.log(upper)
  console.log(lower)

  let balancedLetters = []

  if (upper.size > lower.size) {
    upper.forEach((char) => {
      if (lower.has(char.toLowerCase())) {
        balancedLetters.push(char)
        balancedLetters.push(char.toLowerCase())
      }
    })
  } else {
    lower.forEach((char) => {
      if (upper.has(char.toUpperCase())) {
        balancedLetters.push(char)
        balancedLetters.push(char.toUpperCase())
      }
    })
  }

  console.log(balancedLetters)

  let largestCount = []
  let count = 0

  for (let char of S) {
    if (balancedLetters.includes(char)) {
      count++
      if (S.length === count) {
        return count
      } else {
        largestCount.push(count)
      }
    } else {
      largestCount.push(count)
      count = 0
    }
  }

  console.log(largestCount)

  if (Math.max(...largestCount) === 1 || Math.max(...largestCount) === 0) {
    return -1
  } else {
    return Math.max(...largestCount)
  }
}

console.log(Solution('xdDCZazABaabza'))
// console.log(Solution('azABaabza'))
// console.log(Solution('TacoCat'))
// console.log(Solution('AcZCbaBz'))
// console.log(Solution('abcdefghijklmnopqrstuvwxyz'))
