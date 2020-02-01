# BRUTE FORCE - n^2
def two_string(s1, s2):
    for i in s1:
        for j in s2:
            if i == j:
                return "YES"
    else:
        return "NO"

# def two_string(s1, s2):
    
#     hash = {}

#     for i in s1:
#         hash[i] = True
#         print(hash)
    
    
#     for j in s2:
#         if (j in hash):
#             return "YES"
#     return "NO"
    

print(two_string("hello", "doggy")) # YES
print(two_string("hello", "diggy")) # NO
print(two_string("hello", "happen")) # YES