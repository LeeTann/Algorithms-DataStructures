function solution(S, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // Edge case
  if (!S || S.length === 0) {
    return ''
  }

  let result = ''

  let k = 0

  // loop thru the string S
  for (let i = 0; i < S.length; i++) {
    // add to result first value which is currently S[k] which equals S[0]
    result += S[k]
    // look at the first value in array A which is A[k] which is A[0] and assign it to k.
    k = A[k]
    // k now points to next index to grab
    console.log(k)

    // check if K === 0, if so break out of loop.
    if (k === 0) {
      break
    }
  }

  return result
}
console.log(solution('cdeo', [3, 2, 0, 1]))
console.log(solution('cdeenetpi', [5, 2, 0, 1, 6, 4, 8, 3, 7]))
console.log(solution('bytdag', [4, 3, 0, 1, 2, 5]))
// Given S = "cdeo" and A = [3,2,0,1], your function should return "code"
// c:3, d:2, e:0, o:1
// Given S = "cdeenetpi" and A = [5,2,0,1,6,4,8,3,7]), your function should returns "centipede"
// Given S = "bytdag" and A = [4, 3, 0, 1, 2, 5), your function should returns "bat". Notice, that not all letters from S have to be used.
