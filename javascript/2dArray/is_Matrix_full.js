function isSubMaxtrixFull(matrix) {
  let result = []

  for (let i = 0; i < matrix[0].length - 2; i++) {
    if (checkWindow(matrix, i)) {
      result.push(true)
    } else {
      result.push(false)
    }
  }
  return result
}

function checkWindow(matrix, k) {
  let set = new Set()
  for (let i = 1; i < 10; i++) {
    set.add(i)
  }

  for (let i = 0; i < 3; i++) {
    for (let j = k; j < k + 3; j++) {
      console.log(matrix[i][j])
      if (set.has(matrix[i][j])) {
        set.delete(matrix[i][j])
      }
    }
  }

  return set.size === 0
}

console.log(
  isSubMaxtrixFull([
    [1, 2, 3, 2, 5, 7],
    [4, 5, 6, 1, 7, 6],
    [7, 8, 9, 4, 8, 3],
  ])
) // [true, false, true, false]
