// Given a list of int, return number of pairs (index i and j) that satisfy
// i <= j and list[i] + reverse(list[j]) = list[j] + reverse(list[i]). So if list[i] = 123 then reverse(list[i]) = 321
// For example: [12,1,2] the index would be 0,1,2
// Index combination:
// (0,0) is 12 and 12 => 12 + 21 = 21 + 12 => a pair
// (0,1) is 12 and 1 => 12 + 1 != 1 + 21 => not a pair
// (0,2) is 12 and 2 => 12 + 2 != 2 + 21 => not a pair
// (1,1) is 1 and 1 => 1 + 1 = 1 + 1 => a pair
// (1,2) is 1 and 2 => 1 + 2 = 2 + 1 => a pair
// (2,2) is 2 and 2 => 2 + 2 = 2 + 2 => a pair
// Return 4 cause we have 4 pairs

const numOfPairs = (arr) => {
  let reverseArr = []
  for (let i = 0; i < arr.length; i++) {
    reverseArr.push(parseInt(arr[i].toString().split('').reverse().join('')))
  }
  console.log(reverseArr)

  let count = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i <= j && arr[i] + reverseArr[j] == arr[j] + reverseArr[i]) {
        count++
      }
    }
  }

  return count
}

console.log(numOfPairs([12, 1, 2]))
