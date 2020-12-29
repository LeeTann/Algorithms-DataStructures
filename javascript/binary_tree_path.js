var binaryTreePaths = function (root) {
  let result = []
  dfs(root, '')

  function dfs(node, path) {
    if (!node) return

    if (!node.left && !node.right) {
      result.push(path + node.val)
      return
    }

    dfs(node.left, path + node.val + '->')
    dfs(node.right, path + node.val + '->')
  }

  return result
}
