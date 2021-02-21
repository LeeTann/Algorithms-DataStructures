function maxKOccurences(str, arr) {
  let output = []

  for (let word of arr) {
    let curStr = word
    let count = 0

    while (str.includes(curStr)) {
      count++
      curStr += word
    }

    output.push(count)
  }

  return output
}

console.log(maxKOccurences('ababcbabc', ['ab', 'babc', 'bca'])) // [2, 2, 0].
