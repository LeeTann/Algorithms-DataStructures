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
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = head;
    while (fast !== null && n-- > 0) {
        fast = fast.next;
    }
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    let next = slow.next ? slow.next.next : null;
    slow.next = next;
    return dummy.next;
};

