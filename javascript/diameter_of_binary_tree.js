// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

var diameterOfBinaryTree = function(root) {
  let longestPath = 0
  
  function dfs(node) {
      if (node === null) {
          return 0
      }
      
      let leftSide = dfs(node.left)
      let rightSide = dfs(node.right)
      
      longestPath = Math.max(longestPath, leftSide + rightSide)
      return Math.max(leftSide, rightSide) + 1
  }
  
  dfs(root)
  return longestPath
  
};