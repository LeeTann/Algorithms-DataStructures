var fib = function (n, cache = { 0: 0, 1: 1, 2: 1 }) {
  if (n < 2) {
    return n
  }
  return fib(n - 1, cache) + fib(n - 2, cache)
}
