const avgGrade = (arr) => {
  let scoreHash = {}
  let countHash = {}

  for (let [name, score] of arr) {
    !countHash[name] ? (countHash[name] = 1) : countHash[name]++
  }

  for (let [name, score] of arr) {
    score = parseInt(score)

    if (!scoreHash[name]) {
      scoreHash[name] = score
    } else {
      scoreHash[name] = Math.floor(scoreHash[name] + score)
    }
  }

  let countArr = Object.values(countHash)
  let scoresArr = Object.values(scoreHash)

  let maxAvg = -Infinity
  let i = 0

  while (i < scoresArr.length) {
    maxAvg = Math.max(scoresArr[i] / countArr[i], maxAvg)
    i++
  }

  return maxAvg
}

console.log(
  avgGrade([
    ['Bob', '87'],
    ['Mike', '-35'],
    ['Bob', '52'],
    ['Jason', '-35'],
    ['Mike', '55'],
    ['Jessica', '-99'],
    ['Bob', '20'],
  ])
)
