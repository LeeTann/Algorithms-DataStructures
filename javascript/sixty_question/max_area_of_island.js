var maxAreaOfIsland = function (grid) {
  if (!grid || grid.length === 0) return 0

  let max = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, checkNeighborsValid(grid, i, j))
      }
    }
  }
  return max

  function checkNeighborsValid(grid, i, j) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === 0
    ) {
      return 0
    }
    // mark as visited
    grid[i][j] = 0

    let count = 0
    count += checkNeighborsValid(grid, i + 1, j)
    count += checkNeighborsValid(grid, i, j + 1)
    count += checkNeighborsValid(grid, i - 1, j)
    count += checkNeighborsValid(grid, i, j - 1)

    return count
  }
}
