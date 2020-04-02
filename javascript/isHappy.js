// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

let isHappy = function(n, counter = 0) {
  result = false
  if (counter < 8) {
    // break the number into single digits array and square each number
    let arr = n.toString().split('').map(num => num*num)
    console.log("arr", arr)
    
    // get the sum - 0 is the initial value
    let sum = arr.reduce((a, b) => a + b, 0)
    console.log(sum)
    
    // if sum is 1 return true else go back and repeat the process
    if (sum === 1) {
      result = true
      console.log(result)
      return result
    } else {
      counter++
      return isHappy(sum, counter)
    }
  }
  return result
}

isHappy(19)