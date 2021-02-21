// Given a non-empty integer array `numbers`, you may perform increment operations, each of which increases one of
// the values of the array by 1. Your task is to find the minimum number of increment operations required to make all
// the array elements unique.
// Note: You can increment the same array element multiple times.

// numbers = [5, 1, 2, 4, 5, 2], the output should be minIncrementForUnique(numbers) = 2.
// One way to make all the elements unique is to increment numbers[0] and numbers[2], after which the array will
// look like numbers = [6, 1, 3, 4, 5, 2]. Because 2 increment operations were performed, the answer is 2.

// go thru array. create a hash. keep track of val and # of occurance.
// loop thru array.
// check if hash[val] > 1
// incremnt value by 1 until val doesnt exist in hash
// increment count by 1

function minIncrementForUnique(numbers) {
  numbers.sort()
  console.log(numbers)

  let moves = 0
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] >= numbers[i]) {
      let increment = numbers[i - 1] - numbers[i] + 1
      console.log(increment)
      numbers[i] += increment
      moves += increment
    }
  }

  return moves
}

//
// console.log(minIncrementForUnique([5, 1, 2, 4, 5, 2]))
console.log(minIncrementForUnique([1, 1, 1, 1, 1]))
// console.log(minIncrementForUnique([1, 2, 3, 4, 2]))
// console.log(minIncrementForUnique([3, 6, 1, 1]))
