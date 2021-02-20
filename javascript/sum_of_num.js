function sumOfNumber(number) {
  let numArr = number.toString().split('')
  let sum = 1

  for (let num of numArr) {
    sum *= parseInt(num)
  }

  return sum
}

console.log(sumOfNumber(123456)) // 720
console.log(sumOfNumber(0))
