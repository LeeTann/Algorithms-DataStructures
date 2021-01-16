// Given a string s, return all the palindromic permutations (without duplicates) of it.
// Return an empty list if no palindromic permutation could be form.

// Example1

// Input: s = "aabb"
// Output: ["abba","baab"]
// Example2

// Input: "abc"
// Output: []

// create output array
// create array to store all combinations of string
// loop thru the string and generate all possible combinations

// loop thru the combinations and check if it's a palindrome
// add it to output

let findPermutations = (string) => {
  if (!string || typeof string !== 'string') {
    return 'Please enter a string'
  } else if (string.length < 2) {
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let remainingChar of findPermutations(remainingChars)) {
      permutationsArray.push(char + remainingChar)
    }
  }
  return permutationsArray
}

const palindromePermutation = (s) => {
  let result = []
  let set = new Set()
  let permArr = findPermutations(s)
  for (let word of permArr) {
    if (word === word.split('').reverse().join('') && !set.has(word)) {
      set.add(word)
      result.push(word)
    }
  }
  return result
}

console.log(palindromePermutation('dada'))
