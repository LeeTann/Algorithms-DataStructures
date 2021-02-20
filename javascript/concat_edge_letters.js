// You are given an array of strings a. Your task is to construct an array of strings of the same length,
// where the ith element is equal to the first character of a[i], concatenated with the last character of a[i + 1].
// If there is no a[i + 1], cycle back to the beginning of the array. In other words, for the final element,
// concatenate the first character of a[a.length - 1] with the last character of a[0].
// Return the resulting array of 2-character strings.

function concatEdgeLetters(array) {
  if (array.length === 0) return ''

  let output = []
  let first = ''
  let last = ''

  for (let i = 0; i < array.length; i++) {
    // if its last index
    if (i === array.length - 1) {
      // slice off first letter and last letter of item at 0 index.
      first = array[i].slice(0, 1)
      last = array[0].slice(array[0].length - 1)
      output.push(first + last)
    } else {
      // else we slice off first letter and last letter of next index
      first = array[i].slice(0, 1)
      last = array[i + 1].slice(array[i + 1].length - 1)
      output.push(first + last)
    }
  }

  return output
}

console.log(concatEdgeLetters(['cat', 'dog', 'ferret', 'scorpion'])) // ["cg", "dt", "fn", "st"]
