// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]


// SOLUTION #1
// let swap = function(matrix, i, j, k, l) {
//     let temp = matrix[k][l]
//     matrix[k][l] = matrix[i][j]
//     matrix[i][j] = temp
// }

// var rotate = function(matrix) {
//     let lowBoundary = 0
//     let highBoundary = matrix.length - 1

//     while (lowBoundary < highBoundary) {
//         let currentLength = highBoundary - lowBoundary

//         for (let i = 0; i < currentLength; i++) {
//             let pivot = lowBoundary + i

//             swap(matrix, lowBoundary + i, highBoundary, lowBoundary, pivot)
//             swap(matrix, highBoundary, highBoundary -i, lowBoundary, pivot)
//             swap(matrix, highBoundary - i, lowBoundary, lowBoundary, pivot)
//         }
//         lowBoundary++
//         highBoundary--
//     }

//     console.log(matrix)
//     return matrix
// };

var rotate = function(matrix) {
    matrix = matrix.reverse()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    console.log(matrix)
};

rotate([
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ],)
