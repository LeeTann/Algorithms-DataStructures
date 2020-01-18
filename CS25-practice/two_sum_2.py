# // Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# // You may assume that each input would have exactly one solution, and you may not use the same element twice.

# // Example:

# // Given nums = [2, 7, 11, 15], target = 9,
# // return [0, 1].

#BRUTE FORCE

# double for loop
# i = 0
# j = i + 1

# def two_sum(nums, target):
#     for i in range(len(nums)):
#         for j in range(len(nums)):
#             if nums[i] + nums[j] == target:
#                 return [i, j]

# two_sum([2, 11, 7, 15], 9)

#Optimal




#loop thru the array once. 
# def two_sum(nums, target):

#     hash = {}

#     for i in range(len(nums)):
#         missing_pair = target - nums[i]

#         if missing_pair in hash:
#             return [i, hash[missing_pair]]
#         else:
#             hash[nums[i]] = i
#             print(hash)

# print(two_sum([2, 11, 7, 15], 9))

#target - current value = missing pair

#if its in the hash 
    # return current index, hash

    # store the current value, i

def two_sums(list, target):
    map = {}
    for i in range(len(list)):
        missing_pair = target - list[i]
        if missing_pair in map.keys():
            return [i, map[missing_pair]]
        else:
            map[list[i]] = i
print(two_sums([2, 7, 11, 15], 26))