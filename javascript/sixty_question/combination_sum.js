var combinationSum = function (candidates, target) {
  const output = []

  // The goal is to use backtracking to find all combination
  function findCombination(curTarget, curArray, startIndex) {
    // if currTarget is less than 0 return
    if (curTarget < 0) return []

    // if currTarget is equal to 0, then we found the set of sums that equals target.
    // add a copy of that currArray into output
    if (curTarget === 0) {
      output.push([...curArray])
    }

    // else means currTarget > 0, so loop thru all the candidates and set i = startIndex
    // because we can use the same num as many times as we like.
    for (let i = startIndex; i < candidates.length; i++) {
      // add that num into the currArray
      curArray.push(candidates[i])
      // call DFS function again passing curTarget - num to get remainder
      findCombination(curTarget - candidates[i], curArray, i)
      // once remainder is less than 0, we pop off the curArray and start backtracking.
      curArray.pop()
    }
  }

  findCombination(target, [], 0)
  return output
}

console.log(combinationSum([1, 2, 3], 3))
