// // Brute Force ( O(N^3) )
// var longestPalindrome = function (s) {
//   let maxPalindrome = ''

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       let subStr = s.substring(i, j+1)
//       console.log('check:', subStr)
//       if (isPalindrome(subStr)) {
//         console.log(subStr + ' is a palindrome')
//         if (subStr.length > maxPalindrome.length) {
//           maxPalindrome = subStr
//         }
//       }
//     }
//   }

//   return maxPalindrome
// }

// function isPalindrome(s) {
//   let start = 0
//   let end = s.length - 1

//   while (start <= end) {
//     if (s[start] !== s[end]) {
//       return false
//     } else {
//       start++
//       end--
//     }
//   }

//   return true
// }

var longestPalindrome = function (s) {
  let maxPalindrome = ''
  let curPalindrome = ''

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < i + 2; j++) {
      let left = i
      let right = j
      while (s[left] && s[left] === s[right]) {
        curPalindrome = s.substring(left, right + 1)
        if (curPalindrome.length > maxPalindrome.length) {
          maxPalindrome = curPalindrome
        }
        left--
        right++
      }
    }
  }

  return maxPalindrome
}

console.log(longestPalindrome('fabbad'))
