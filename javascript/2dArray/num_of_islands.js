// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

var numIslands = function(grid) {

  if (grid === null || grid.length === 0) {
    return 0
  }

  let count = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count += 1
        checkNeighborsAndBoundry(grid, i, j)
      }
    }
  }

  return count
};

let checkNeighborsAndBoundry = function(grid, i, j) {
  // check boundries or if current grid is === 0
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
    return 0
  }

  grid[i][j] = '0'
  // check neighbors
  checkNeighborsAndBoundry(grid, i + 1, j)
  checkNeighborsAndBoundry(grid, i - 1, j)
  checkNeighborsAndBoundry(grid, i, j + 1)
  checkNeighborsAndBoundry(grid, i, j - 1)

}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))