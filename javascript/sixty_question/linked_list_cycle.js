var hasCycle = function (head) {
  // edge case
  if (!head) return false

  // create two pointers called fast and slow
  let fast = head
  let slow = head

  // while head is true
  while (head) {
    // check if hit end of LL and its null that means its not a cycle and return false.
    // depending on even or odd num of nodes in LL, since fast increments by 2 the end of LL can be either last nodes or second to last node.
    if (fast.next === null || fast.next.next === null) return false

    // increments fast by 2, slow by 1
    fast = fast.next.next
    slow = slow.next

    // check if fast === slow then we have a cycle and return true
    if (fast === slow) return true
  }
}
