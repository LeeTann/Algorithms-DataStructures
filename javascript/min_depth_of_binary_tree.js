var minDepth = function (root) {
  if (!root) return 0

  let queue = [root]
  let levels = 1

  while (queue.length) {
    qLength = queue.length

    for (let i = 0; i < qLength; i++) {
      let node = queue.shift()

      if (node.left === null && node.right === null) return levels
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    levels++
  }
  return levels
}
