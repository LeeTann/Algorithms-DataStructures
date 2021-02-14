// Maximum possible value by inserting '5'
// examples:
// input: 1234 -> output: 51234
// input: 7643 -> output 76543
// input: 0 -> output 50
// input: -661 -> output -5661

function solution(N) {
  if (N < 0) {
    let num = '5' + Math.abs(N.toString())
    num = -num
    console.log(num)
    return num
  }

  N = Math.abs(N)
  let numArr = N.toString().split('')
  console.log(numArr)
  let result = []

  for (let char of numArr) {
    let num = parseInt(char)

    if (num <= 5) {
      result.push('5')
      result.push(char)
    } else if (num > 5) {
      result.push(char)
    }
  }

  console.log(result.join(''))
  return result.join('')
}

solution(268)
// solution(670)
// solution(5)
// solution(0)
// solution(-2761)
// solution(-999)
