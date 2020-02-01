# Keep track of 3 nodes in SLL
# HeadNode
# NextNode
# PreviousNode - does not exist yet so have to create and set to None

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None 

def reverseList(self, head: ListNode) -> ListNode:
    # Create a new node at the front called PrevNode and set to None
    PrevNode = None

    # Loop thru the linked-list
    while(head != None):
        # Set head.next into a temp variable so we can have a referance and keep track of the value
        tempNextNode = head.next
        # point head.next to the new node in the front that was created
        head.next = PrevNode
        # move everything one over to start next loop by setting PrevNode to head 
        PrevNode = head
        # set head into next node
        head = tempNextNode

    # return prevNode because head node would be None.
    return PrevNode

reverseList([1,2,3,4,5])