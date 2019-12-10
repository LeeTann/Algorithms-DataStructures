function ListNode(val) {
    this.val = val
    this.next = null
}

var isPalindrome = function(head) {
    if(!head) return head

    let slow = head
    let fast = head
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    let rev = reverse(slow)
    while(head !== null && rev !== null) {
        if(head.val !== rev.val) {
            return false
        }
        head = head.next
        rev = rev.next
    }
    return true
}

let reverse = function(head) {
    let curr = head
    let prev = null

    while(curr !== null) {
        let nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }
    return prev
}
