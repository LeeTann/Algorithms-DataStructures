function swapString(string, array) {
  let str = ''
  let myArr = []
  let prev = 0

  for (let i = 0; i < array.length; i++) {
    myArr[i] = string.slice(prev, prev + array[i])

    prev = prev + array[i]
    console.log(prev)
  }

  for (let i = 0; i < myArr.length; i++) {
    if (i < myArr.length - 1) {
      str += myArr[i + 1]
      str += myArr[i]
      i = i + 1
    } else {
      str += myArr[i]
    }
  }

  return str
}

console.log(swapString('descognail', [3, 2, 3, 1, 1])) // codesignal
