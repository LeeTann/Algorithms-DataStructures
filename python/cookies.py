# # Eating Cookies

# Cookie Monster can eat either 0, 1, 2, or 3 cookies at a time. 
# If he were given a jar of cookies with `n` cookies inside of it, how many ways could he eat all `n` cookies in the cookie jar? 
# Implement a function `eating_cookies` that counts the number of possible ways Cookie Monster can eat all of the cookies in the jar. 

# For example, for a jar of cookies with `n = 3` (the jar has 3 cookies inside it), 
# there are 4 possible ways for Cookie Monster to eat all the cookies inside it:

#  1. He can eat 1 cookie at a time 3 times
#  2. He can eat 1 cookie, then 2 cookies 
#  3. He can eat 2 cookies, then 1 cookie
#  4. He can eat 3 cookies all at once. 

# Thus, `eating_cookies(3)` should return an answer of 4.
# eating_cookies(3) should return the answer of 13

# 0(3^n) - Exponential Time - when not using memcache since it calls recursion function 3 times
# 0(n) - Linear - when using memcache. 


# # First iteration without memcache
# def eating_cookies(n):
#     if n == 0:
#         return 1
#     if n == 1:
#         return 1
#     if n == 2:
#         return 2

#     recursive_calls = int(eating_cookies(n-1) + eating_cookies(n-2) + eating_cookies(n-3))
#     print("recursive calls", recursive_calls)
#     return recursive_calls
    
# print(eating_cookies(5))

# Second iteration with memcache
hash = {}

def eating_cookies(n, memcache):
    # Set base case
    if n == 0:
        return 1
    if n == 1:
        return 1
    if n == 2:
        return 2

    # Check if n is in hash, if so return hash[n]
    if n in hash:
        return hash[n]
    else:
        # else do recursive calls passing in hash and set its result to a variable = output
        output = eating_cookies(n-1, hash) + eating_cookies(n-2, hash) + eating_cookies(n-3, hash)
        # store the output in hash
        hash[n] = output

        # return the output
        return output
  
print(eating_cookies(30, hash))