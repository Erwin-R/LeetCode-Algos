# Brute force Solution
# Time: O(2^n), Space: O(n)
# Where n is the number of items.
def dfs(profit, weight, capacity):
    return dfsHelper(0, profit, weight, capacity)

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

print('Result', dfs([4,4,7,1], [5,2,3,1], 8))

#1
#i: 3
# maxProfit before: 0 (checked this pair)
# P: 1
# maxProfit after: 1
# ---------

#2
# i: 3
# maxProfit before: 0 (checked this pair)
# P: 1
# maxProfit after: 1
# ---------

#3
#i: 2
# maxProfit before: 1 (checked this pair)
# P: 8
# maxProfit after: 8
# ---------

#4
#i: 3
# maxProfit before: 0 (checked this pair) 
# P: 1
# maxProfit after: 1
# ---------

#5
#i: 3
# maxProfit before: 0 (checked this pair)
# P: 1
# maxProfit after: 1
# ---------

#6
# maxProfit before: 1 (checked)
# P: 8
# maxProfit after: 8
# ---------

#7
# maxProfit before: 8 (checked)
# P: 12
# maxProfit after: 12
# ---------

# maxProfit before: 0
# P: 1
# maxProfit after: 1
# ---------
# maxProfit after: 0
# ---------
# maxProfit before: 1
# P: 7
# maxProfit after: 7
# ---------
# maxProfit before: 0
# P: 1
# maxProfit after: 1
# ---------
# maxProfit after: 1
# ---------
# maxProfit before: 7
# P: 5
# maxProfit after: 7
# ---------
# maxProfit before: 12
# P: 11
# maxProfit after: 12
# ---------
# Result 12
