const f = (matrix) => {
    let dp = new Array(matrix.length + 1)
      .fill(0)
      .map(() => new Array(matrix[0].length + 1).fill(0));
    let ans = 0;
    for (let row = 1; row < dp.length; row++) {
      for (let col = 1; col < dp[0].length; col++) {
        if (matrix[row - 1][col - 1] == 1) {
          dp[row][col] =
            1 +
            Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]);
        }
        ans += dp[row][col];
      }
    }
    return ans;
};

f([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
]);
