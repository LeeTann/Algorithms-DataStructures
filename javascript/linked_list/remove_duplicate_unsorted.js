function remove_duplicate(head) {
    // Write your code here
    let pointer1 = head
    let pointer2 = head
    
    // loop til pointer1 is not null
    while (pointer1 !== null) {
        pointer2 = pointer1

        // while pointer2 is not null increment pointer2
        while (pointer2.next !== null) {
            // compare if the data is the same
            if (pointer1.data === pointer2.next.data) {
                // increment by 2 to skip
                let temp 
                temp = pointer2.next
                pointer2.next = pointer2.next.next
            } else {
                // increment pointer2 by 1
                pointer2 = pointer2.next
            }
        }
        // increment pointer1
        pointer1 = pointer1.next
    }
    return head
}