function brokenKeyboard(text, letter) {
  // if text does not contain alphabets, return the text array length
  if (text.match(/^[^a-zA-Z]*$/)) return text.split(' ').length

  // removes all but letters, numbers and whitespace
  let wordArr = text
    .replace(/[^a-z\d\s]+/gi, '')
    .toLowerCase()
    .split(' ')

  let strLetter = letter.join('').toLowerCase()
  let set = new Set(strLetter)

  let output = []
  for (let word of wordArr) {
    let count = 0

    for (let char of word) {
      if (set.has(char)) {
        count++
        if (count === word.length) {
          output.push(word)
        }
      }
    }
    console.log(count)
  }
  console.log(output)
  return output.length
}

console.log(
  brokenKeyboard('Hello,?! this is CodeSignal!', ['e', 'i', 'h', 'l', 'o', 'S']) //2
)
// console.log(brokenKeyboard('? !', ['e', 'i', 'h', 'l', 'o', 's']))
// console.log(brokenKeyboard('? !o e E', ['e', 'i', 'h', 'l', 'o', 's'])) // 2
// console.log(
//   brokenKeyboard('Hi, this is Chris!', ['r', 's', 't', 'c', 'h']) // 0
// )
// console.log(
//   brokenKeyboard('3 + 2 = 5', []) // 5
// )
