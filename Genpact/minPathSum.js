// Given a 2D array, find the minimum sum of a path from the top-left corner to the bottom-right corner. 

var minPathSum = function (grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) return 0

    let dp = []
    dp[0] = grid[0][0]

    for (let i = 1; i < grid[0].length; i++) {
        dp[i] = dp[i - 1] + grid[0][i]
    }

    for (let i = 1; i < grid.length; i++) {
        dp[0] += grid[i][0]
        for (let j = 1; j < grid[i].length; j++) {
            dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1])
        }
    }

    return dp[dp.length - 1]
};


minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])