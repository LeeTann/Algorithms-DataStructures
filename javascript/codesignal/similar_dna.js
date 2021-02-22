// Given a String reference and a list of strings candidates, compute the number of candidate sequences that are similar to the reference sequence.

// Two strings are similar if any rotation of the strings are within 3 substitutions of each other.

// Examples:

// GAAAAAA and GAAATTT are similar because you could replace the last 3 A's with Ts to get from the first to the second
// GAAAAAA and AAATTTG are similar because you could replace the last 3 A's with Ts and rotate one character to the left to get from the first string to the second string
// GAAAAAA and GAATTTT are not similar because you need to make at least 4 substitutions to get from the first string to the second string.
// Example Input:
// reference: GAAAAAA
// candidates: [GAAATTT, AAATTTG, GAATTTT]

// Output:
// 2

// function similarString(ref, candidates) {
//   similar = 0

//   for (let candidate of candidates) {
//     for (let i = 0; i < candidate.length; i++) {
//       console.log(i)
//       let diff = getDifference(ref, candidate, i)
//       if (diff <= 3) {
//         similar += 1
//         break
//       }
//     }
//   }
//   return similar
// }

// function getDifference(str1, str2, i) {
//   let result = 0
//   for (let k = 0; k < str1.length; k++) {
//     let rotated = (k + i) % str1.length
//     console.log(rotated)
//     console.log(str1[k])
//     console.log(str2[rotated])
//     if (str1[k] != str2[rotated]) {
//       result += 1
//     }
//   }
//   console.log(result)
//   return result
// }

function similarString(ref, candidates) {
  let diff = 0

  for (let candidate of candidates) {
    let hash = {}
    for (let char of ref) {
      if (!hash[char]) {
        hash[char] = 1
      } else {
        hash[char]++
      }
    }
    console.log(hash)

    for (let letter of candidate) {
      if (hash[letter]) {
        hash[letter]--
      } else {
        hash[letter] = false
      }
    }

    console.log(hash)
    let sum = Object.values(hash).reduce((a, b) => a + b, 0)
    console.log(sum)

    if (sum <= 3) {
      diff += 1
    }
  }

  return diff
}
console.log(similarString('GAAAAAA', ['GAAATTT', 'AAATTTG', 'GAATTTT'])) //2
// console.log(similarString('AAABCC', ['GAAATT', 'AAATTT', 'GAATTT']))
// console.log(similarString('GAAAAAAE', ['GAATTTTA']))
