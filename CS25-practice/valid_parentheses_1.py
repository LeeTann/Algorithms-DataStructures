# Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# An input string is valid if:
    # Open brackets must be closed by the same type of brackets.
    # Open brackets must be closed in the correct order.
    # Note that an empty string is also considered valid.

# print(isValid("()")) # True
# print(isValid("({[]})")) # True
# print(isValid("()[]{}")) # True
# print(isValid("(()")) # False
# print(isValid("////")) # False
# print(isValid("(]")) # False
# print(isValid("))")) # False - Edge case

# ({[]})

def isValid(str):
    # Things to keep track off
    validOpening = "({["
    stack = []
    index = 0
    isBalanced = True

    # Loop thru the string 
    while index < len(str) and isBalanced:
        bracket = str[index]

        # check if char is valid bracket in validOpening, put it in stack
        if bracket in validOpening:
            stack.append(bracket)

        # else it's a closing bracket
        else:
            # if length of stack is empty
            if len(stack) == 0:
               isBalanced = False 
            # pop it off the top of the stack
            else:
                popped_item = stack.pop()
                # compare popped item if it matched closing bracket
                if not isMatch(popped_item, bracket):
                    isBalanced = False

        # keep going and increment
        index += 1

    # return if length of our stack is not empty and isBalanced is true.
    return len(stack) == 0 and isBalanced


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