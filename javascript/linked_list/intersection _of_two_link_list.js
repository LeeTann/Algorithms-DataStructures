var getIntersectionNode = function (headA, headB) {
  // check to see if either headA or headB is null, if so return null
  if (headA === null || headB === null) {
    return null
  }

  // need two pointers to keep track of headA & headB
  let pointer1 = headA
  let pointer2 = headB

  // while the two pointers are not equal
  while (pointer1 !== pointer2) {
    // advance to next one
    pointer1 = pointer1.next
    pointer2 = pointer2.next

    // check if the pointers are equal, if so return either one
    if (pointer1 === pointer2) {
      return pointer1
    }

    // if pointer1 reaches the end, point it to head of second list
    if (pointer1 === null) {
      pointer1 = headB
    }
    // if pointer2 reaches the end, point it to head of first list
    // This negates the length difference of the two list.
    if (pointer2 === null) {
      pointer2 = headA
    }
  }

  // means they are equal and can return either pointer1 or pointer2
  return pointer1
}

// Using a Set approach
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }

  // loop thru the first list and add it to our Set.
  let mySet = new Set()

  while (headA) {
    mySet.add(headA)
    headA = headA.next
  }

  // loop thru the second list, check if it exist in the set if it is, return it.
  // else add it to the set and increment
  while (headB) {
    if (mySet.has(headB)) {
      return headB
    }
    mySet.add(headB)
    headB = headB.next
  }

  // if it makes it all the way thru, return null since they dont have a match.
  return null
}
