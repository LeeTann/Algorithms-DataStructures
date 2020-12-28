// Decide to rob or not to rob
var rob = function (root) {
  // create helper function
  function decision(node) {
    // if node has no child means we are at the end that branch. we return [0,0]. decide to rob or not to rob value of [0,0]
    if (!node) return [0, 0]

    // if we make it pass that check that means we do have child nodes and have to decision to make.
    // recursively call the decision method on the left node and right node.
    let [robLeft, notRobLeft] = decision(node.left)
    let [robRight, notRobRight] = decision(node.right)

    // create variable called robNode = if we rob that node value, we cant rob left or right child node.
    let robNode = node.val + notRobLeft + notRobRight
    // create variable called notRobNode = we want the max of all possible decisions to rob or not to rob left and right child
    let notRobNode = Math.max(
      robLeft + robRight,
      robLeft + notRobRight,
      notRobLeft + robRight,
      notRobLeft + notRobRight
    )

    // return the two variable to decide choice to robNode or notRobNode
    return [robNode, notRobNode]
  }

  // return max of the decision(...spread in because decision return [two choices]) and pass in root
  return Math.max(...decision(root))
}
