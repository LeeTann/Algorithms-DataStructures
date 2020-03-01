def whatFlavors(cost, money):
    ## BRUTE FORCE
    # for i in range(0, len(cost)):
    #     for j in range(1, len(cost)):
    #         if cost[i] + cost[j] == money:
    #             print(i+1, j+1)
    #             return

    hash = {}
    # loop thru cost array
    for i in range(0, len(cost)):
        # store value in hash with it's index
        hash[cost[i]] = i
    print(hash)
    # loop thru cost array
    for i in range(0, len(cost)):
        # get the pair
        pair = money - cost[i]
        # check if pair is in hash
        if pair in hash:
            # increment the index by 1 and hash index value by 1
            i = i+1
            hash[pair] = hash[pair]+1
            
            # error check it's not the same index cost
            if i == hash[pair]:
                continue
            # check which value cost is higher and return it last.    
            if i > hash[pair]:
                print(hash[pair], i)
                return
            else:
                print(i, hash[pair])
                return


# whatFlavors([1,4,5,3,2], 4)
whatFlavors([4,3,2,5,7], 8)