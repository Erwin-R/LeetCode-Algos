#Time and Space for function that initializes object
#Time: O(n^2)
#Space: O(n^2)

#Time and Space for function that initializes object
#Time: O(1)
#Space: O(1)

class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        ROWS, COLS = len(matrix), len(matrix[0])
        #offsetting the row and col by 1 to cover edge case 
        self.sumMat = [[0] * (COLS + 1) for r in range(ROWS + 1)]

        for r in range(ROWS):
            prefix = 0 
            for c in range(COLS):
                prefix += matrix[r][c]
                above = self.sumMat[r][c + 1]
                self.sumMat[r + 1][c + 1] = prefix + above
        
        print(self.sumMat)


    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        #add one to each to account for the offset of sumMat
        r1, r2, c1, c2 = row1 + 1, row2 + 1, col1 + 1, col2 + 1
        
        bottomRight = self.sumMat[r2][c2]
        above = self.sumMat[r1 - 1][c2]
        left = self.sumMat[r2][c1 - 1]
        topLeft = self.sumMat[r1 -1][c1 - 1]

        #topLeft gets subtracted twice so we need to add it back again
        return bottomRight - above - left + topLeft 

# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)