var reverseVowels = function (s) {
  let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let myArr = s.split('')
  let stack = []

  for (let i = 0; i < myArr.length; i++) {
    if (vowel.includes(myArr[i])) {
      stack.push(myArr[i])
    }
  }

  for (let i = 0; i < myArr.length; i++) {
    if (vowel.includes(myArr[i])) {
      let popped = stack.pop()
      myArr[i] = popped
    }
  }

  return myArr.join('')
}
