// Write a function `find_max_profit` that receives as input a list of stock prices. 
// Your function should return the maximum profit that can be made from a single buy and sell. 
// You must buy first before selling; no shorting is allowed here.

// For example, `find_max_profit([1050, 270, 1540, 3800, 2])` should return 3530, 
// which is the maximum profit that can be made from a single buy and then sell of these stock prices. 

function find_max_profit(stock_prices) {
    let minValue = stock_prices[0]
    let maxProfit = stock_prices[1] - minValue

    for (let i=0; i < stock_prices.length; i++) {
        for (let j=i+1; j < stock_prices.length; j++) {
            currProfit = stock_prices[j] - stock_prices[i]
            if (currProfit > maxProfit) {
                maxProfit = currProfit
            } else {
                continue
            }
        }
    }
    return maxProfit
}

console.log(find_max_profit([1050, 270, 1540, 3800, 2]))