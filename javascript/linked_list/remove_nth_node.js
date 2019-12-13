var removeNthFromEnd = function(head, n) {
    let list = new ListNode(0)
    list.next = head

    while (list !== null) {
        let slow = list
        let fast = list

        if (fast.next !== null & fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        slow.next = slow.next.next
    }
    return ohead.next
}

var removeNthFromEnd = function(head, n) {
    let node = new ListNode(0); node.next = head
    let fast = node, slow = node
    for (let i = 1; i <= n + 1; i++) {
        fast = fast.next
    }
    
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return node.next
};

