/*
 * Complete the 'removeKthLinkedListNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST head
 *  2. INTEGER k
 */
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
// find the length of the link list until node.next = null
// then iterate again. n - length - 1
function removeKthLinkedListNode(head, k) {
    let current = head
    current.next = head

    let fast = current
    let slow = current

    for (let i = 1; i <= k+1; i++) {
        fast = fast.next
    }
    
    while(fast !== null) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return current.next
}
console.log(removeKthLinkedListNode([10, 20, 30, 40, 50], 1))