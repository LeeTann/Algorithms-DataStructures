// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

// You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
// BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

var leftMostColumnWithOne = function(binaryMatrix) {
  let dim = binaryMatrix.dimensions()
  let rows = dim[0]
  let cols = dim[1]

  if (rows === 0 || cols === 0) {
    return -1
  }

  let result = -1
  let r = 0
  let c = cols - 1

  while (r < rows && c >= 0) {
    if (binaryMatrix.get(r,c) === 1) {
      result = c
      c--
    } else {
      r++
    }
  }
  
  return result
};