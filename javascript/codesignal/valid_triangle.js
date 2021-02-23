// Given an array A return an output array B of size [A.length - 2] where B[i] = 1 if sides
// A[i],A[i+1] and A[i+2] form a triangle. Otherwise, set B[i] = 0.
// ex. A = [1, 2, 2, 5, 5, 4] should return B = [1,0,0,1]

function validTriange(A) {
  B = []
  i = 0

  while (i < A.length - 2) {
    if (
      A[i] + A[i + 1] > A[i + 2] &&
      A[i + 1] + A[i + 2] > A[i] &&
      A[i] + A[i + 2] > A[i + 1]
    ) {
      B.push(1)
    } else {
      B.push(0)
    }

    i++
  }

  return B
}

console.log(validTriange([1, 2, 2, 5, 5, 4]))
