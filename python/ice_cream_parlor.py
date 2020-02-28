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
        # store value in hash
        hash[cost[i]] = i

    # loop thru cost array
    for i in range(0, len(cost)):
        # get the pair
        pair = money - cost[i]
        
        if pair in hash:
            i = i+1
            hash[pair] = hash[pair]+1
            
            if i == hash[pair]:
                continue
            if i > hash[pair]:
                print(hash[pair], i)
                return
            else:
                print(i, hash[pair])
                return


# whatFlavors([1,4,5,3,2], 4)
whatFlavors([4,3,2,5,7], 8)