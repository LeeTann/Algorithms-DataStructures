// We have n chips, where the position of the ith chip is position[i].

// We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

// position[i] + 2 or position[i] - 2 with cost = 0.
// position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.

var minCostToMoveChips = function (position) {
  let odds = 0
  let evens = 0

  for (let chip of position) {
    if (chip % 2 === 0) {
      evens++
    } else {
      odds++
    }
  }

  return Math.min(odds, evens)
}
