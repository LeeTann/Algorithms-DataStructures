// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

var minPathSum = function (grid) {
  if (grid === null || grid.length === 0) return 0
  let path = []

  // iterate over every cell in grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if its one of the middle cells in the grid we want to get the min sum between left and top cell.
      if (i > 0 && j > 0) {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        // else if its in the first row, current cell is the sum of current cell + top cell
      } else if (i > 0) {
        grid[i][j] += grid[i - 1][j]
        // else if its in the first col, current cell is the sum of current cell + left cell
      } else if (j > 0) {
        grid[i][j] += grid[i][j - 1]
      }
    }
  }

  console.log(grid)

  // return the last cell in the grid
  return grid[grid.length - 1][grid[0].length - 1]
}

minPathSum([
  [1, 3, 9],
  [1, 5, 1],
  [4, 2, 1],
  [5, 2, 2],
]) // returns 11...... 1 => 1 => 4 => 2 => 1 => 2.
