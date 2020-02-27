# # There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1] .

## BRUTE FORCE
# def pairs(k, arr):
#     counter = 0
#     for i in range(0, len(arr)):
#         for j in range(0, len(arr)):
#             if arr[i] - arr[j] == k:
#                 counter += 1
#     return counter

# print(pairs(2, [1,5,3,4,2]))


def pairs(k, arr):

    counter = 0
    hash = {}

    # loop arr and store the values in a hash
    for i in range(0, len(arr)):
        hash[arr[i]] = True
    
    # loop thru the arr again and check if the diff is in the hash
    for j in range(0, len(arr)):
        diff = arr[j] - k

        # if it is, increment counter
        if diff in hash:
            counter += 1
    return counter

print(pairs(2, [1,5,3,4,2]))
# There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1] .