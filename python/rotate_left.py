def rotLeft(a, d):
    # create a new outcome array
    outcome = []
    # slice of first part of the array. then slice of the second part of the array.
    firstHalf = a[0:d]
    secondHalf = a[d:len(a)]

    # loop thru second part of array and add it to new array.
    for i in secondHalf:
        outcome.append(i)
    # loop thru first part of array and add it to new array
    for i in firstHalf:
        outcome.append(i)

    # return the outcome
    print(outcome)
    return outcome

rotLeft([1,2,3,4,5,6], 4)