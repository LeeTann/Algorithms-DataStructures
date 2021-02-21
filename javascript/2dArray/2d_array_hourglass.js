function hourglassSum(arr) {
    // set our first value
    let max = null

    // loop thru 2d array. y is the column. length -2 so we dont have out of bounds
    for (let y=0; y < arr.length - 2; y++) {
        // loop thru with x. x is the row.
        for (let x=0; x < arr.length - 2; x++) {
            //get the sum
            let matrixSum = getMatrixSum(arr, y, x)
            // set max to new sum if new sum>max and max===null
            if (max === null || matrixSum > max) {
                max = matrixSum
            }
        }
    } 
    return max
}

// identify the hourglass sum
function getMatrixSum(arr, y, x) {
    return arr[y][x] + arr[y][x+1] + arr[y][x+2] + arr[y+1][x+1] + 
        arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
}
