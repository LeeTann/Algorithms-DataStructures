var removeKdigits = function (num, k) {
  const stack = []

  for (let i = 0; i < num.length; i++) {
    if (i === 0) {
      stack.push(num[0])
      console.log(stack)
    }

    while (stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop()
      k--
    }

    // push if the num is not '0' or if it's not a leading '0'
    if (num[i] !== '0' || stack.length) stack.push(num[i])
  }

  while (k--) stack.pop() // keep poping until 'k' is 0

  return stack.length ? stack.join('') : '0'
}

console.log(removeKdigits('1432219', 3))
