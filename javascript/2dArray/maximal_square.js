// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

var maximalSquare = function(matrix) {
  // check if matrix length is empty
  if (matrix.length < 1) return 0

  let rows = matrix.length 
  let cols = matrix[0].length

  // create a copy of the 2d matrix
  let map = [...matrix]
  console.log(matrix)
  
  // keep track of max counter
  let maxLength = 0

  // loop thru the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      
      // if its the first row index or first row column index
      if (i === 0 || j === 0) {
        // copy the number over to the new 2d matrix
        map[i][j] = parseInt(matrix[i][j])
        // else if the curr number is equal to 0
      } else if (matrix[i][j] === '0') {
        // set it to 0 in the 2d matrix.
        map[i][j] = 0
        // else means the curr num is equal to 1
      } else {
        // get the min of left, top and topleft plus 1
        map[i][j] = Math.min(map[i][j-1], map[i-1][j], map[i-1][j-1]) + 1
      }

      // if curr num is greater than max num, then set max num equal to curr num
      if (map[i][j] > maxLength) {
        maxLength = map[i][j]
      }
    }
  }
  console.log(map)

  // return curr num * curr num
  return maxLength * maxLength
};

console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])) // 4