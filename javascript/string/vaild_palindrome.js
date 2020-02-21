// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// let isPalindrome = function(s) {
//     let newString = s.replace(/\W+/g, "").toLowerCase()
//     return newString === newString.split("").reverse().join("")
// };

function isPalindrome(s) {
    let start = 0
    let end = s.length -1
    
    while (end >= start) {
        while (s[end] === " ") {
            end--
        }
        while (s[start] === " ")
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false
        }
        start++
        end--
    }
    return true
}

console.log(isPalindrome('Race car'))