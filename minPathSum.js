// Leetcode minimum path sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right
// which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  const addToSum = (row, col, sum) => {
    grid[row][col] = grid[row][col] + sum;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col !== 0) {
        addToSum(row, col, grid[row][col - 1]);
      } else if (col === 0 && row !== 0) {
        addToSum(row, col, grid[row - 1][col]);
      } else if (row !== 0 && col !== 0) {
        addToSum(row, col, Math.min(grid[row - 1][col], grid[row][col - 1]));
      }
    }
  }
  return grid[rows - 1][cols - 1];
};
