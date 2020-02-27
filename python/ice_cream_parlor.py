def whatFlavors(cost, money):
    ## BRUTE FORCE
    # for i in range(0, len(cost)):
    #     for j in range(1, len(cost)):
    #         if cost[i] + cost[j] == money:
    #             print(i+1, j+1)
    #             return

    hash = {}

    for i in range(0, len(cost)):
        print(i)
        hash[cost[i]] = i
    print(hash)

# whatFlavors([1,4,5,3,2], 4)
whatFlavors([4,3,2,5,7], 8)