// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

// ANSWER # 1 ////
// var groupAnagrams = function(strs) {
//     const hash = {}
    
//     // loop thru the array
//     for (let str of strs) {
//       console.log(str)
//       let sum = 0

//       // loop thru each string and sum up the charcode of each char
//       for (let i = 0; i < str.length; i++) {
//         sum += str.charCodeAt(i) ** 4
//       }
//       console.log(sum)

//       // check if the sum not in hash, create an empty array of that hash sum
//       if (!hash[sum]) {
//         hash[sum] = []
//         hash[sum].push(str)
//       } else {
//         hash[sum].push(str)
//       }
//     }
//     console.log(Object.values(hash))
//     return Object.values(hash)
// };

//// ANSWER # 2 ////
let groupAnagrams = function(strs) {
  let hash = {}
  
  for (let str of strs) {
    const sortedStr = str.split('').sort((a, b) => a > b).join('')
    
    if (!hash[sortedStr]) {
      hash[sortedStr] = []
      hash[sortedStr].push(str)
    } else {
      hash[sortedStr].push(str)
    }
  }
  console.log(Object.values(hash))
  return(Object.values(hash))
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])