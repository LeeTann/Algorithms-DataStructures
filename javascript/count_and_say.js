var countAndSay = function (n) {
  let result = '1'

  while (n > 1) {
    let count = 1
    let current = ''

    for (let i = 0; i < result.length; i++) {
      if (result[i] === result[i + 1]) {
        count++
      } else {
        current += `${count}${result[i]}`
        count = 1
      }
    }

    result = current
    n--
  }

  return result
}

console.log(countAndSay(4))
