var mostCommonWord = function (paragraph, banned) {
  let updatedParagraph = paragraph.toLowerCase().split(/\W+/)

  console.log(updatedParagraph)
  let hash = {}
  let max = 0
  let result = ''

  for (let word of updatedParagraph) {
    if (!hash[word]) {
      hash[word] = 1
    } else {
      hash[word]++
    }
  }

  for (let key in hash) {
    if (hash[key] > max && !banned.includes(key)) {
      max = hash[key]
      result = key
    }
  }

  return result
}

console.log(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit',
  ])
)
console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']))
