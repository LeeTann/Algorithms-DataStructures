// Write a function `find_max_profit` that receives as input a list of stock prices. 
// Your function should return the maximum profit that can be made from a single buy and sell. 
// You must buy first before selling; no shorting is allowed here.

// For example, `find_max_profit([1050, 270, 1540, 3800, 2])` should return 3530, 
// which is the maximum profit that can be made from a single buy and then sell of these stock prices. 

// function find_max_profit(stock_prices) {
//     let minValue = stock_prices[0]
//     let maxProfit = stock_prices[1] - minValue

//     for (let i=0; i < stock_prices.length; i++) {
//         for (let j=i+1; j < stock_prices.length; j++) {
//             currProfit = stock_prices[j] - stock_prices[i]
//             if (currProfit > maxProfit) {
//                 maxProfit = currProfit
//             } else {
//                 continue
//             }
//         }
//     }
//     return maxProfit
// }

let find_max_profit = function(prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {  
    let currPrice = prices[i]
    let currProfit = currPrice - minPrice

    // if currPrice is less then minPrice, then update minBuy price
    if (currPrice < minPrice) {
      minPrice = currPrice
      // else if currProfit is greater than maxProfit, update maxProfit
    } else if (currProfit > maxProfit) {
      maxProfit = currProfit
    }
  }

  return maxProfit
}
// console.log(find_max_profit([1050, 270, 1540, 3800, 2]))
console.log(find_max_profit([7,1,5,3,6,4])) // return 5