# Write a function `find_max_profit` that receives as input a list of stock prices. 
# Your function should return the maximum profit that can be made from a single buy and sell. 
# You must buy first before selling; no shorting is allowed here.

# For example, `find_max_profit([1050, 270, 1540, 3800, 2])` should return 3530, 
# which is the maximum profit that can be made from a single buy and then sell of these stock prices. 

def find_max_profit(stock_prices):
    min_value = stock_prices[0]
    max_profit = stock_prices[1] - min_value

    for i in range(len(stock_prices)):
        for j in range(i + 1, len(stock_prices)):
            current_profit = stock_prices[j] - stock_prices[i]
            if current_profit > max_profit:
                max_profit = current_profit
            else:
                continue
    return max_profit

print(find_max_profit([1050, 270, 1540, 3800, 2]))