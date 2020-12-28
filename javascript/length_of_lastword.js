var lengthOfLastWord = function (s) {
  if (!s || s === ' ') {
    return 0
  }

  sArray = s.trim().split(' ')

  let count = 0

  for (let char of sArray[sArray.length - 1]) {
    count += 1
  }

  return count
}
