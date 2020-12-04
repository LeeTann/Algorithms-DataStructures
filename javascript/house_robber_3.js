var rob = function (root) {
  // create helper function
  function decision(node) {
    // if node has no child means we are at the end. we return [0,0]. decide to take or not to take sum of [0,0]
    if (!node) return [0, 0]
    let [robLeft, notRobLeft] = decision(node.left)
    let [robRight, notRobRight] = decision(node.right)

    let robNode = node.val + notRobLeft + notRobRight
    let notRobNode = Math.max(
      robLeft + robRight,
      robLeft + notRobRight,
      notRobLeft + robRight,
      notRobLeft + notRobRight
    )

    return [robNode, notRobNode]
  }

  // return max of the decision(...spread in because decision return [two choices]) and pass in root
  return Math.max(...decision(root))
}
