// CTCI 8.2, sort of, and leetcode problem
// A robot is in the top left corner of a m x n grid.
// Count # unique paths to get to bottom right corner.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// with dynamic programming, O(MxN) time
var uniquePaths = function(m, n) {
  // init matrix m x n with all values set to 0
  let matrix = [];
  for (let row = 0; row < n; row++) {
    let row = [];
    for (let col = 0; col < m; col++) {
      row[col] = 0;
    }
    matrix.push(row);
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (row === 0 || col === 0) {
        matrix[row][col] = 1; // first row and first col
      } else {
        matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
      }
    }
  }
  return matrix[n - 1][m - 1]; // return val of bottom-right most cell
};

// // without dynamic programming, O(2^N) time
// var uniquePaths = function(m, n) {
//   if (m === 1 && n === 1) {
//       return 1;
//   } else if (m === 0 || n === 0) {
//       return 0;
//   }
//   return uniquePaths(m - 1, n) + uniquePaths(m, n -1);
// };
