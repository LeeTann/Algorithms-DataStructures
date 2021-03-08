// In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position you can walk one step to the left, right, up or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.

// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

var getMaximumGold = function (grid) {
  let maxGold = -Infinity

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) {
        let highestSum = dfs(grid, i, j, (currTotal = 0))
        maxGold = Math.max(maxGold, highestSum)
      }
    }
  }
  return maxGold
}

function dfs(grid, row, col, currTotal) {
  // check if cell is out of bounds or cell is equal to 0, return currTotal
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] === 0
  ) {
    return currTotal
  }

  // none of our checks triggered, so we found a new valid cell and add it to currTotal
  currTotal += grid[row][col]

  // store the cell into a temp value to keep a reference and mark it as used by setting it to 0
  let temp = grid[row][col]
  grid[row][col] = 0

  // recursively search all possible directions from current cell
  let left = dfs(grid, row - 1, col, currTotal)
  let right = dfs(grid, row + 1, col, currTotal)
  let up = dfs(grid, row, col - 1, currTotal)
  let down = dfs(grid, row, col + 1, currTotal)

  // after all recursive search is done for that cell, reset it's value before moving onto the next cell to start another dfs
  grid[row][col] = temp

  // return highest sum found for our dfs
  return Math.max(left, right, up, down)
}

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
)
