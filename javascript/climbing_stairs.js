var climbStairs = function (n, cache = { 0: 0, 1: 1, 2: 2 }) {
  // check if n is already in cache
  // if not then set cache[n] = sum of previous two cached items
  // then return cache[n]
  if (!cache[n]) {
    cache[n] = climbStairs(n - 1, cache) + climbStairs(n - 2, cache)
  }

  return cache[n]
}

// ** this works but exceeds time limit so need to cache it! **

// var climbStairs = function (n) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   if (n === 2) return 2

//   return climbStairs(n - 1) + climbStairs(n - 2)
// }
