function tinyVal(array1, array2, k) {
  if (array1.length === 0 || array2.length === 0) return 0

  let count = 0

  while (array1.length !== 0) {
    let popped1 = array1.shift().toString()
    let popped2 = array2.pop().toString()

    let concatVal = popped1 + popped2
    console.log(concatVal)

    if (concatVal > k) count++
  }
  return count
}

console.log(tinyVal([1, 5, 8], [6, 3, 4], 40)) //2
console.log(tinyVal([], [6, 3, 4], 40))
