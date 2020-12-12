var maxRepeating = function (sequence, word) {
  let concat = word
  let count = 0

  while (sequence.includes(concat)) {
    count++
    concat = concat + word
  }

  return count
}
