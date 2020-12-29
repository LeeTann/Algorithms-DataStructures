function palindromePermutation(inputString) {
  let mySet = new Set()

  for (let char of inputString) {
    if (!mySet.has(char)) {
      mySet.add(char)
    } else {
      mySet.delete(char)
    }
  }

  return mySet.size <= 1
}

console.log(palindromePermutation('racecar'))
console.log(palindromePermutation('rcaerca'))
console.log(palindromePermutation('racecat'))
console.log(palindromePermutation('rcaepca'))
