def checkMagazine(magazine, note):
    # check if length of note is greater than length magazine
    if len(note) > len(magazine):
        print("No")
        return

    hash = {}
    # loop thru magazine and store it in hash.
    for word in magazine:
        if word in hash:
            hash[word] += 1 
        else:
            hash[word] = 1
    
    # loop thru the note and check if it's in the hash
    for word in note:
        if word not in hash or hash[word] == 0:
            print("No")
            return
        else:
            hash[word] -= 1
    
    print("Yes")

checkMagazine(["give", "me", "me", "me", "give", "night"], ["give", "me"])  
checkMagazine(["give", "me", "me", "me", "give", "night"], ["give", "me", "me", "me", "give"])        
checkMagazine(["give", "me", "me", "me", "give", "night"], ["give", "me", "me", "me", "give", "dog"])
checkMagazine(["give", "me", "me", "me", "give", "night"], ["Give", "me", "me", "me", "give", "nigth"])
checkMagazine(["give", "me", "me", "me", "give", "night"], ["give", "me", "me", "me", "give", "night", "night"])
checkMagazine(["give", "me", "me", "me", "give", "night"], ["give", "me", "me", "me", "me"])