// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // Create a set to store all the unique values
  const mySet = new Set(A)
  console.log(mySet)
  let i = 1

  // Start i at 1. If mySet has i, just keep incrementing i.
  while (mySet.has(i)) {
    i++
  }

  // else we break from the look once i is missing from mySet and return i
  return i
}

// console.log(solution([1, 3, 6, 4, 1, 2])) //5
console.log(solution([-1, -3])) //1
