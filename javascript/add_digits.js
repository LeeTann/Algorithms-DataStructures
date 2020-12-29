var addDigits = function (num) {
  if (num < 10) return num

  let numsArr = num.toString().split('')
  let sum = 0

  for (let numStr of numsArr) {
    sum += parseInt(numStr)
  }

  return addDigits(sum)
}

console.log(addDigits(38))
