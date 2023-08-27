def dfsHelper(i, profit, weight, capacity):
    if i == len(profit):
        return 0

    # Skip item i
    maxProfit = dfsHelper(i + 1, profit, weight, capacity)

    # Include item i
    newCap = capacity - weight[i]
    if newCap >= 0:
        p = profit[i] + dfsHelper(i + 1, profit, weight, newCap)
        print("i:", i)
        print("maxProfit before:", maxProfit)
        print('P:', p)
        # Compute the max
        maxProfit = max(maxProfit, p)
    print("maxProfit after:", maxProfit)
    print("---------")
    return maxProfit