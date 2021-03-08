/**
 * You are an avid rock collector who lives in southern California. Some rare and desirable rocks just became
 * available in New York, so you are planning a cross-country road trip. There are several other rare rocks that you
 * could pick up along the way.
 *
 * You have been given a grid filled with numbers, representing the number of rare rocks available in various cities across
 * the country. Your objective is to find the optimal path from So_Cal to New_York that would allow you to accumulate the most rocks
 * along the way.
 *
 * Note: You can only travel either north (up) or east (right).
 *
 * Example:
 *
 * { {0,0,0,0,5}, (New York)
 *   {0,1,1,1,0},
 *   {2,0,0,0,0}  (So_Cal)
 *   }
 *
 * So total for the optimal path here would be: 2 + 1 + 1 + 1 + 5 = 10
 *
 *
 */

function maxPathSum(grid) {
  if (grid.length === 0) return 0

  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = 0; j < grid[i].length; j++) {
      // if its a middle cell, get max of bottom and right
      if (i < grid.length - 1 && j > 0) {
        grid[i][j] += Math.max(grid[i + 1][j], grid[i][j - 1])
        // else if it's a bottom row, add current cell + cell below
      } else if (i < grid.length - 1) {
        grid[i][j] += grid[i + 1][j]
        // else if its the left col, add current cell + left cell
      } else if (j > 0) {
        grid[i][j] += grid[i][j - 1]
      }
    }
  }

  console.log(grid)
  // return cell on top row, right col
  return grid[0][grid[0].length - 1]
}

console.log(
  maxPathSum([
    [0, 0, 0, 0, 5],
    [0, 1, 1, 1, 0],
    [2, 0, 0, 0, 0],
  ])
)
