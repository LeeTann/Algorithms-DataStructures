function isConcatenate(str, arr) {
  let res = ''

  for (let word of arr) {
    res += word

    if (res === str) {
      return true
    }
  }

  return false
}

console.log(isConcatenate('one', ['one', 'Three', 'Two']))
console.log(isConcatenate('oneTwoThree', ['one', 'Three', 'Two']))
console.log(isConcatenate('one', ['One', 'one', 'Two']))
