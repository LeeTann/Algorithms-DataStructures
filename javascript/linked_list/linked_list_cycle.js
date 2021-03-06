// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second 

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

function ListNode(val) {
    this.val = val
    this.next = null
}

// Solution #1
// var hasCycle = function(head) {
//     let set = new Set()
//     while (head.next !== null) {
//         if (set.has(head)) {
//             return true
//         } esle {
//             set.add(head)
//         }
//         head = head.next
//     }
//     return false
// };

// Solution #2
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false
    }

    let slow = head
    let fast = head

    while (true) {
        if (fast.next === null || fast.next.next === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next

        if (fast === slow) {
            return true
        }
    }
}