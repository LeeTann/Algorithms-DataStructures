var combinationSum = function (candidates, target) {
  const output = []

  // The goal is to use backtracking to find all combination
  function findCombination(curTarget, curArray, startIndex) {
    if (curTarget < 0) return output

    if (curTarget === 0) {
      output.push([...curArray])
    }

    for (let i = startIndex; i < candidates.length; i++) {
      curArray.push(candidates[i])
      findCombination(curTarget - candidates[i], curArray, i)
      curArray.pop()
    }
  }

  findCombination(target, [], 0)
  return output
}

console.log(combinationSum([1, 2, 3], 3))
