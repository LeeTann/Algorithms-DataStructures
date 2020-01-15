# // Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# // You may assume that each input would have exactly one solution, and you may not use the same element twice.

# // Example:

# // Given nums = [2, 7, 11, 15], target = 9,

# // Because nums[0] + nums[1] = 2 + 7 = 9,
# // return [0, 1].

def two_sum(nums, target):

    # for i in range(len(nums)):
    #     for j in range(len(nums)):
    #         if nums[i] + nums[j] == target:
    #             return [i, j]

    # Create hash to store each num along with it's index
    hash = {}

    # Loop thru each num in the nums
    for i in range(len(nums)):
        # Find the missing pair
        pair = target - nums[i]

        #Check if the missing pair is in the hash
        if pair in hash:
            # return the current index of the loop which is "i" and the missing pair value from hash which is "hash[pair]"
            return [i, hash[pair]]
        else:
            # else store the current num which is "nums[i]" in the hash with it's current index "i"
            hash[nums[i]] = i
            print(hash)

print(two_sum([2,7,11,15,20], 27))