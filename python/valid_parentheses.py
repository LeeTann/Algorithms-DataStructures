# def isValid(s):

#     stack = []
#     hash = { ")":"(", "}":"{", "]":"[" }

#     for bracket in s:
#         # check if it's not one of the closing bracket 
#         if bracket not in hash:
#             # means its an opening and added it to the stack
#             stack.append(bracket)
        
#         # Else it means that it's a closing bracket
#         else:
#             # Check if the stack is empty
#             if len(stack) == 0:
#                 # That means we have nothing pop off and compare so return False
#                 return False
#             # Else that means we have something in the stack
#             else:
#                 # pop it off the top of stack
#                 popped_item = stack.pop()
#                 # compare if popped item doesnt matches the hashed item
#                 if popped_item != hash[bracket]:
#                     return False

#     # If we made it all the way thru and the stack is empty we have a balanced bracket
#     return len(stack) == 0
    
# Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# An input string is valid if:
    # Open brackets must be closed by the same type of brackets.
    # Open brackets must be closed in the correct order.
    # Note that an empty string is also considered valid.

def isValid(s):
    validOpening = "([{"
    stack = []
    is_balanced = True
    index = 0

    # loop thru the string and string is balanced
    while index < len(s) and is_balanced:
        bracket = s[index]
        # if bracket is a valid bracket, add it to the stack
        if bracket in validOpening:
            stack.append(bracket)
        # otherwise it's a closing bracket
        else:
            # if the stack is empty, we have nothing to pop, we set balanced to False - Edge case
            if len(stack) == 0:
                is_balanced = False
            # otherwise pop off the top element
            else:
                popped_item = stack.pop()
                # check if popped_item and the current closing bracket is a match
                if not isMatch(popped_item, bracket):
                    is_balanced = False
        # increment counter
        index += 1
    
    # if we made it all the way thru the loop and stack is empty and is balanced - return true or false
    return len(stack) == 0 and is_balanced


def isMatch(popped_item, bracket):
    if popped_item == "(" and bracket == ")":
        return True
    elif popped_item == "{" and bracket == "}":
        return True
    elif popped_item == "[" and bracket == "]":
        return True
    else:
        return False

print(isValid("()")) # True
print(isValid("({[]})")) # True
print(isValid("()[]{}")) # True
print(isValid("(()")) # False
print(isValid("////")) # False
print(isValid("(]")) # False
print(isValid("))")) # False - Edge case