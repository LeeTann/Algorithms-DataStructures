var maxDepth = function (s) {
  let stack = []
  let count = 0
  let depth = 0

  for (let char of s) {
    if (char === '(') {
      stack.push(char)
      console.log('push', stack)
      count++
    } else if (char === ')') {
      let popped = stack.pop()
      depth = Math.max(depth, count)
      count--
    }
  }
  console.log(stack)
  return count
}

console.log(maxDepth('(1)+((2))+(((3)))'))
