var isPowerOfThree = function (n) {
  while (n && n % 3 === 0) {
    n = n / 3
    console.log(n)
  }

  return n === 1
}
