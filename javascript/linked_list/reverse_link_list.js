// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?
function LinkedList(val) {
    this.val = val
    this.next = null
}

let reverseList = function(head) {
    let prevNode = null

    while(head !== null) {
        let nextNode = head.next
        head.next = prevNode
        prevNode = head
        head = nextNode
    }
    return prevNode
}