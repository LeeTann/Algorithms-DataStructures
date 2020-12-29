// (/[^a-z0-9]/gi, '')
// (/\W+/g, '')

var isPalindrome = function (s) {
  let newString = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

  let i = 0
  let j = newString.length - 1

  while (i <= j) {
    if (newString[i] === newString[j]) {
      i++
      j--
    } else {
      return false
    }
  }

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
