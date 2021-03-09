// -1: live -> dead
// 0: dead -> dead
// 1: live -> live
// 2: dead -> live

function gameOfLife(board) {
  const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  // Loop thru each cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // Keep track of count, by looping thru each neighbor and adding coordinates i + x and j + y.
      // if newI and newJ is alive, either -1 or 1, And its a valid cell in boundary, increment the count
      let neighorCount = 0
      neighbors.forEach(([x, y]) => {
        const newI = i + x
        const newJ = j + y
        if (
          newI >= 0 &&
          newI < board.length &&
          newJ >= 0 &&
          newJ < board[i].length &&
          (board[newI][newJ] === -1 || board[newI][newJ] === 1)
        ) {
          neighorCount++
        }
      })

      // if cell is Alive AND our neighborCount < 2 or neighborCount > 3, change cell to -1 (Dead)
      if (board[i][j] === 1 && (neighorCount < 2 || neighorCount > 3)) {
        board[i][j] = -1
        // else if cell is Dead AND neighborCount equals 3, change cell to 2 (Alive)
      } else if (board[i][j] === 0 && neighorCount === 3) {
        board[i][j] = 2
      }
    }
  }

  console.log(board)

  // loop thru the board again, change all -1 to 0 (dead). change all 2 to 1 (alive)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0
      }
      if (board[i][j] === 2) {
        board[i][j] = 1
      }
    }
  }

  return board
}

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
)

// return [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
