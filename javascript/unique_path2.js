var uniquePathsWithObstacles = function (obstacleGrid) {
  let rows = obstacleGrid.length
  let cols = obstacleGrid[0].length

  if (!obstacleGrid || !rows || !cols) return 0

  // Create a new 2D matrix and fill everything with 0
  let matrix = new Array(rows).fill(0).map((row) => Array(cols).fill(0))

  // Check if first cell in obstacleGrid is 0, then set first cell in matrix = 1, else first cell in matrix = 0
  if (obstacleGrid[0][0] === 0) {
    matrix[0][0] = 1
  } else {
    matrix[0][0] = 0
  }

  // loop thru the first cell in each rows of ObstacleGrid starting at index 1
  // check if current obstacleGrid cell is 0 and previous top matrix cell is 1 (means a vaild path)
  // set current matrix cell to 1
  for (let i = 1; i < rows; i++) {
    if (obstacleGrid[i][0] === 0 && matrix[i - 1][0] === 1) {
      matrix[i][0] = 1
    }
  }

  // loop thru the first cell in each col of obstacleGrid starting at index 1
  // check if current obstacleGrid cell is 0 and previous left matrix cell is 1 (means a vaild path)
  // set current matrix cell to 1
  for (let i = 0; i < cols; i++) {
    if (obstacleGrid[0][i] === 0 && matrix[0][i - 1] === 1) {
      matrix[0][i] = 1
    }
  }

  // loop thru each inner cell starting at index (1,1) of obstacleGrid
  // if that current cell is an obstacle, set the matrix cell to 0
  // else set that matrix cell to the sums of previous left matrix cell and previous top matrix cell.
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (obstacleGrid[i][j] == 1) {
        matrix[i][j] = 0
      } else {
        matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
      }
    }
  }

  // return the last cell of matrix to get the number of unique path.
  return matrix[rows - 1][cols - 1]
}

console.log(
  uniquePathsWithObstacles([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
)

// [(1, 1, 1)][(1, 0, 1)][(1, 1, 2)]
