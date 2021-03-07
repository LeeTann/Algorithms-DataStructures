// Given a list of scores of different students, return the average score of each student's top five scores
// in the order of each student's id. Each entry items[i] has items[i][0] the student's id,
// and items[i][1] the student's score.  The average score is calculated using integer division.

// Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
// Explanation:
// The average of the student with id = 1 is 87.
// The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.

function highFive(scores) {
  // if id are the same, sort by scores (highest-lowest), else sort by id (lowest-highest)
  let sortedArr = scores.sort((a, b) =>
    a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
  )
  console.log(sortedArr)

  let res = []

  for (let i = 0; i < sortedArr.length; i++) {
    let currId = sortedArr[i][0]
    let totalScore = 0
    let count = 0

    while (count < 5) {
      totalScore += sortedArr[i][1]
      count++
      i++
    }

    res.push([currId, Math.floor(totalScore / count)])
  }

  return res
}

console.log(
  highFive([
    [1, 91],
    [1, 92],
    [2, 93],
    [2, 97],
    [1, 60],
    [2, 77],
    [1, 65],
    [1, 87],
    [1, 100],
    [2, 100],
    [2, 76],
  ])
) //[[1,87],[2,88]]
