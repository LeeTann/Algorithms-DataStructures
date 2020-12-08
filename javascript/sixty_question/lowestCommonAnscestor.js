var lowestCommonAncestor = function (root, p, q) {
  let result = dfsHelper(root, p, q)
  return result
}

// Bottom up approach. Sweep thru the bottom and if you find a target, return its parent
function dfsHelper(root, p, q) {

  if (!root) return null

  // if we hit a target return its previous stack call
  if (root.val === p.val || root.val === q.val) {
    return root
  }

  let left = dfsHelper(root.left, p, q)
  let right = dfsHelper(root.right, p, q)

  // if target is coming from left and right, then it means ancestor is at the top (root)
  if(left && right) {
    return root
    // else if both are on the left side just return the first one found since its on top
  } else if (left) {
    return left
     // else it means both are on the right side just return the first one found since its on top
  } else (right) {
    return right
  }
}
