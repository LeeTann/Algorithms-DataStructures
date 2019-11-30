// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function ListNode(val) {
    this.val = val
    this.next = null
}

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode()
    let curr = dummy

    while(l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            curr.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            curr.next = new ListNode(l2.val)
            l2 = l2.next
        }
        curr = curr.next
    }

    if(l1 !== null) {
        curr.next = l1
    }
    if (l2 !== null) {
        curr.next = l2
    }

    return dummy.next
}