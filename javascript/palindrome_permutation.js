function palindromePermutation(inputString) {
  let mySet = new Set()

  for (let char of inputString) {
    if (!mySet.has(char)) {
      mySet.add(char)
    } else {
      mySet.delete(char)
    }
  }

  console.log(mySet)

  return mySet.size <= 1
}

console.log(palindromePermutation('racecar')) //true
console.log(palindromePermutation('rcaerca')) //true
console.log(palindromePermutation('racecat')) //false
console.log(palindromePermutation('rcaepcaep')) //true
