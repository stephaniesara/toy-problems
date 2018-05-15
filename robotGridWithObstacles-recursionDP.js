// CTCI 8.2
// robot grid with obstacles

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (obstacleGrid[row][col] === 1) {
        // first cell
        if (row === 0 && col === 0) {
          return 0;
        } else {
          obstacleGrid[row][col] = 0;
        }
      } else if (row === 0 && col === 0) {
        // first cell
        obstacleGrid[row][col] = 1;
      } else if (row === 0) {
        // first row
        obstacleGrid[row][col] = obstacleGrid[row][col - 1];
      } else if (col === 0) {
        // first col
        obstacleGrid[row][col] = obstacleGrid[row - 1][col];
      } else {
        obstacleGrid[row][col] =
          obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1];
      }
    }
  }
  return obstacleGrid[rows - 1][cols - 1];
};
