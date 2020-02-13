# helper function to get sum of hourglass
def getMatrixSum(arr, y, x):
    hourglass = arr[y][x] + arr[y][x+1] + arr[y][x+2] + arr[y+1][x+1] + arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
    return hourglass

def hourglassSum(arr):
    # set our first value
    max = float("-inf")

    # loop thru 2d array. y is the column. len -2 so we dont go out of bounds.
    for y in range(len(arr) - 2):
        # loop thru with x. x is the row.
        for x in range(len(arr[0]) -2):
            # get the sum of matrix/
            sum = getMatrixSum(arr, y, x)

            # set max to new sum if new sum > max or max == null
            if sum > max or max == float("-inf"):
                max = sum

    # return max
    return max

print(hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]])) # 19