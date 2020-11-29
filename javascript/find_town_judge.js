var findJudge = function (N, trust) {
  // edge cases
  if (N === 0 && trust.length === 0) return -1
  if (N === 1 && trust.length === 0) return 1

  // create a new map and set each i = 0 up to N starting at 1
  let myMap = new Map()
  for (let i = 1; i <= N; i++) {
    myMap.set(i, 0)
  }
  console.log(myMap)

  // loop thru the [i, j] of trust array
  for (let [i, j] of trust) {
    // each time the person trust someones, decrement their value -1 in myMap
    myMap.set(i, myMap.get(i) - 1)
    // each time the person gets trusted by someone, increment their value + 1 myMap
    myMap.set(j, myMap.get(j) + 1)
  }

  // loop thru the Map
  for (let [key, value] of myMap) {
    // check if the value equals N-1(number of people - 1), if so return the key
    if (value === N - 1) return key
  }

  // make it all the way thru and cant find judge, return -1
  return -1
}

console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
)
