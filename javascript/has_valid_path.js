var hasValidPath = function (grid) {
  let getDir = {
    1: [
      [0, -1],
      [0, 1],
    ], // left, right
    2: [
      [-1, 0],
      [1, 0],
    ], // upper, lower
    3: [
      [0, -1],
      [1, 0],
    ], // left, lower
    4: [
      [0, 1],
      [1, 0],
    ], // right, lower
    5: [
      [0, -1],
      [-1, 0],
    ], // left, upper
    6: [
      [0, 1],
      [-1, 0],
    ], // right, upper
  }

  // BFS
  let queue = [[0, 0]] // queue with starting part
  let start = `0, 0`
  let visited = { start: true }
  let m = grid.length
  let n = grid[0].length

  while (queue.length > 0) {
    let [currI, currJ] = queue.shift()

    // check if we reach the end cell, then return true
    if (currI === m - 1 && currJ === n - 1) return true

    // get directions that we can go to from current cell
    let directions = getDir[grid[currI][currJ]]
    for (let [u, v] of directions) {
      // create next cell
      let i = currI + u
      let j = currJ + v

      // check out of bounds or if next cell has been visited, just continue
      if (i < 0 || i > m - 1 || j < 0 || j > n - 1 || visited[`${i}, ${j}`])
        continue

      let nextCellExist = false
      let nextCellDirection = getDir[grid[i][j]]

      for (let [p, q] of nextCellDirection) {
        if (p + i === currI && q + j === currJ) {
          nextCellExist = true
        }
      }

      if (nextCellExist) {
        queue.push([i, j])
        visited[`${i}, ${j}`] = true
      }
    }
  }

  return false
}
