// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

var uniquePaths = function (m, n) {
  // Edge case
  if (m === 0 && n === 0) return 0
  if (m === 0 || n === 0) return 1

  // Create a 2D matrix of Array and fill it with 1
  let matrix = new Array(m).fill(Array(n).fill(1))

  // current matrix starting at position [1][1] is the sum of the matrix to the left and matrix to the top.
  // loop thru the matrix and continue to fill out the matrix.
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
    }
  }

  // then you want to return the last matrix to get the total.
  return matrix[m - 1][n - 1]
}

console.log(uniquePaths(3, 7))
