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

// var longestPalindrome = function (s) {
//   let maxPalindrome = ''
//   let curPalindrome = ''

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < i + 2; j++) {
//       let left = i
//       let right = j
//       while (s[left] && s[left] === s[right]) {
//         curPalindrome = s.substring(left, right + 1)
//         if (curPalindrome.length > maxPalindrome.length) {
//           maxPalindrome = curPalindrome
//         }
//         left--
//         right++
//       }
//     }
//   }

//   return maxPalindrome
// }

var longestPalindrome = function (s) {
  let maxPal = ''

  for (let i = 0; i < s.length; i++) {
    bubble(i, i) // odd palindrome
    bubble(i, i + 1) // even palindrome
  }

  function bubble(left, right) {
    while (left >= 0 && s[left] === s[right]) {
      left--
      right++
    }
    left++
    right--

    if (maxPal.length < right - left + 1) {
      maxPal = s.slice(left, right + 1)
    }
  }
  return maxPal
}

console.log(longestPalindrome('fabbad'))
