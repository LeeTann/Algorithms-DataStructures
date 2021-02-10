var maxInt = function (num) {
  let numArr = num.toString().split('')
  let index = numArr.indexOf('6')
  numArr[index] = '9'

  let answer = parseInt(numArr.join(''))

  return answer
}

// console.log(maxInt(696)) // 996
// console.log(maxInt(99)) // 99
console.log(maxInt(99666)) // 99966
