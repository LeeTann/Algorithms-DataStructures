def makeAnagram(a, b):
    hash = {}
    count = 0
    
    for char in a:
        if char in hash:
            hash[char] += 1
        else:
            hash[char] = 1
    
    for char in b:
        if char in hash:
            hash[char] -= 1
        else:
            hash[char] = -1
    
    for char in hash:
        count += abs(hash[char]) 
    
    return count

print(makeAnagram('cdee', 'abcew'))