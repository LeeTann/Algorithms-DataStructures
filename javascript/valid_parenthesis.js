// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].

var checkValidString = function(s) {
    if (s.length < 1) {
      return true
    }

    let balance = 0

    for (let i = 0; i < s.length; i++) {
      let char = s[i]
      
      // if it's ')' decrement balance else it's either '(' or '*' increase balance
      char === ')' ? balance-- : balance++

      // if ')' is the first one it means balance is neg and it's false
      if (balance < 0) return false
    }

    // if we made it thru the first loop and balance is 0, then the string is balanced
    if (balance === 0) return true

    // set balanced back to 0 and traverse backwards to check if its balanced
    balance = 0
    for (let i = s.length -1; i >= 0; i--) {
      let char = s[i]
      
      char === '(' ? balance-- : balance++

      if (balance < 0) return false
    }

    return true
};

// let checkValidString = function(s) {
//   let stack = []
//   let stack2 = []

//   for (let i = 0; i < s.length; i++) {
//     let currChar = s[i]
//     if (currChar === '(') {
//       stack.push(i)
//     } else if (currChar === '*') {
//       stack2.push(i)
//     } else if (currChar === ')') {
//       if (stack.length) {
//         stack.pop()
//       } else if (stack2.length) {
//         stack2.pop()
//       } else if (!stack.length && !stack2.length) {
//         return false
//       }
//     }
//   }

//   while (stack.length && stack2.length) {
//     if (stack.pop() > stack2.pop()) {
//       return false
//     }
//   }

//   return !stack.length
// }


console.log(checkValidString(')(**)))('))