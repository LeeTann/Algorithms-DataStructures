// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7]

// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = function (root) {
  if (!root) return []

  let output = []
  let queue = [0]

  while (queue.length > 0) {
    let size = queue.length
    let level = []

    for (let i = 0; i < size.length; i++) {
      let node = queue.shift()
      level.push(node.val)

      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }

    output.push(level)
  }
  return output
}

levelOrder([3, 9, 20, null, null, 15, 7])
