// DFS (Recursion)
var maxDepth = function (root) {
  if (!root) return null
  let max = Math.max(maxDepth(root.left), maxDepth(root.right))
  return max + 1
}

// BFS (Level Order)
var maxDepth = function (root) {
  if (!root) return 0

  let queue = [root]
  let levels = 0

  while (queue.length > 0) {
    qLength = queue.length

    for (let i = 0; i < qLength; i++) {
      let currentNode = queue.shift()

      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }

    levels++
  }
  return levels
}
