// Given an array arr of unique nonnegative integers, implement a function getDifferentNumber
// that finds the smallest nonnegative integer that is NOT in the array.

// Brute Force //

function getDifferentNumber(arr) {
  if (arr.length === 1 && arr[0] !== 0) return 0

  const sortedArr = arr.sort()

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] !== sortedArr[i] + 1) {
      return sortedArr[i] + 1
    }
  }
}

function getDifferentNumber(arr) {
  if (arr.length === 1 && arr[0] !== 0) return 0

  let set = new Set(arr)
  console.log(set)
}

console.log(getDifferentNumber([1, 2, 4, 5]))
