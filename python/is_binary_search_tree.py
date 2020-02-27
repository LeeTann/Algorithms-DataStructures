# def checkBST(root):
#     tree_value = []
#     # does in-order traversal, populating the tree_value array
#     inOrderTraversal(root, tree_value)
#     # check if the array is sorted
#     return isSorted(tree_value)

# # performs the in-order traversal
# def inOrderTraversal(root, arr):
#     if root.left:
#         inOrderTraversal(root.left, arr)
        
#     arr.append(root.data)
    
#     if root.right:
#         inOrderTraversal(root.right, arr)

# # check if the array is in sorted ascending order       
# def isSorted(arr):
#     for i in range(1, len(arr)):
#         if arr[i] <= arr[i-1]:
#             return False
#     return True

def helper(root, min, max):
    if root is None:
        return True
    
    if root.data < min or root.data > max:
        return False

    return helper(root.left, min, root.data -1) and helper(root.right, root.data + 1, max)

def checkBST(root):
    return helper(root, float('-inf'), float('inf'))