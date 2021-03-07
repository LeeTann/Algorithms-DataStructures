var isRobotBounded = function (instructions) {
  let x = 0
  let y = 0
  let dir = 0

  let output = []

  for (let move of instructions) {
    for (let direction of move) {
      if (direction === 'R') {
        dir += 3
      } else if (direction === 'L') {
        dir++
      } else {
        switch (dir % 4) {
          case 0:
            y++
            break
          case 1:
            x++
            break
          case 2:
            y--
            break
          case 3:
            x--
            break
        }
      }
    }

    if ((!x && !y) || dir % 4 != 0) {
      output.push('YES')
    } else {
      output.push('NO')
    }
  }

  return output
}

// console.log(isRobotBounded('GGLLGG'))
// console.log(isRobotBounded('GG'))
// console.log(isRobotBounded('G'))
// console.log(isRobotBounded('L'))
// console.log(isRobotBounded('RGRG'))
console.log(isRobotBounded(['G', 'L', 'RGRG']))
console.log(isRobotBounded(['GGGGR', 'RGL']))
