var findSmallestSetOfVertices = function (n, edges) {
  let myMap = new Map()

  for (let [key, value] of edges) {
    myMap.set(value, true)
  }
  console.log(myMap)

  let result = []

  for (let i = 0; i < n; i++) {
    if (!myMap.has(i)) {
      result.push(i)
    }
  }

  return result
}

console.log(
  findSmallestSetOfVertices(5, [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ])
)

// Output: [0,2,3]
