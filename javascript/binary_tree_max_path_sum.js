// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6
// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42

var maxPathSum = function(root) {
  let maxSum = Number.NEGATIVE_INFINITY

  currPathSum(root)

  return maxSum

  function currPathSum(node) {
    if (node === null) return 0
    
    let left = Math.max(0, currPathSum(node.left))
    let right = Math.max(0, currPathSum(node.right))
    
    // update maxSum 
    maxSum = Math.max(maxSum, left + right + node.val)
    
    // returns max to parent node
    return Math.max(left, right) + node.val
  }
};

