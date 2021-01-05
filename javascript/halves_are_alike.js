var halvesAreAlike = function (s) {
  let countL = 0
  let countR = 0

  let vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let half = s.length / 2

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (vowel.has(char)) {
      if (i < half) {
        countL++
      } else {
        countR++
      }
    }
  }

  return countL === countR
}

console.log(halvesAreAlike('book'))
