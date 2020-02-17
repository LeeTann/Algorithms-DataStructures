def checkMagazine(magazine, note):
    
    hash = {}
    for word in magazine:
        if word in hash:
            hash[word] += 1 
        else:
            hash[word] = 1

    for word in note:
        if word not in hash or hash[word] == 0:
            print("No")
            return
        else:
            hash[word] -= 1
    
    print("Yes")
        
checkMagazine(["give", "me", "me", "me", "give", "night"], ["give", "me", "me", "me", "give", "dog"])