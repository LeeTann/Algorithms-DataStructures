var hasPathSum = function (root, sum) {
  // Edge Case
  if (!root) {
    return false
  }

  // Base Case - Exit the recursive loop if tree is empty
  // by returning either true or false if sum equals the value
  if (root.left === null && root.right === null) {
    if (sum === root.val) {
      return true
    } else {
      return false
    }
  }

  // recursively iterate left or right side and continue to subtract from sum
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  )
}
