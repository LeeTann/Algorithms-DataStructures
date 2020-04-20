// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// Example 1:

// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var bstFromPreorder = function(preorder) {
  let root = new TreeNode(preorder[0])
  if (preorder.length === 0) return null
  
  if (preorder.length === 1) return root
  
  let leftNodes = []
  let rightNodes = []
  
  for (let i = 0; i < preorder.length; i++) {
      let currNum = preorder[i]

      if (currNum < preorder[0]) {
          leftNodes.push(currNum)
      } else if (currNum > preorder[0]) {
          rightNodes.push(currNum)
      }
  }
  
  console.log(leftNodes)
  console.log(rightNodes)

  root.left = bstFromPreorder(leftNodes)
  root.right = bstFromPreorder(rightNodes)

  return root
}

console.log(bstFromPreorder([8,5,1,7,10,12]))