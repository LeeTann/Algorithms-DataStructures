function diStringMatch(S) {
  let N = S.length
  let A = []

  for (let i = 0; i <= N; i++) {
    A.push(i)
  }

  for (let i = 0; i < N; i++) {
    if (S[i] === 'D') {
      let popped = A.pop()
      A.splice(i, 0, popped)
      console.log(A)
    }
  }

  return A
}

console.log(diStringMatch('IDID'))
