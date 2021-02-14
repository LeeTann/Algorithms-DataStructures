# // A String is called balanced when every letter occurring in the string, appears both in upper- and lowercase.
# // For example, the string "CATattac" is balanced ('a','c' and 't' occur in both cases), but "Madam" is not ('d' and 'a' appear only in lowercase).
# // Note that the number of occurrences does not matter.

# // Write a function:

# // class Solution { public int solution (string S); }

# // that, given a string S of length N, returns the length of the shortest balanced fragment of S.
# // If S does not contain any balanced fragments, the function should return -1.

# // Examples:

# // 1. Given S = "azABaabza", the function should return 5. The shortest balanced fragment of S is "ABaab".
# // 2. Given S = "TacoCat", the function should return -1. There is no balanced fragment.
# // 3. Given S = "AcZCbaBz", the function should return 8. The shortest balanced fragment is the whole string.
# // 4. Given S = "abcdefghijklmnopqrstuvwxyz", the function should return -1


def balanced_str(S):
    upper = set()
    lower = set()

    for char in S:
        if char.isupper():
            upper.add(char)
        else:
            lower.add(char)

    balanced = []

    if len(upper) < len(lower):
        for char in upper:
            if char.lower() in lower:
                balanced.append(char)
                balanced.append(char.lower())
    else:
        for char in lower:
            if char.upper() in upper:
                balanced.append(char)
                balanced.append(char.upper())
    print(balanced)

    running_max = []
    count = 0


balanced_str('azABaabza')
