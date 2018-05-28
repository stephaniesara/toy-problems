// CTCI 1.8
// if an elem in an mxn matrix is 0, set every element in that row and col to 0

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let firstRowHasZero = false;
  let firstColHasZero = false;

  // check if first row has a zero
  for (let i = 0; i < cols; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // check if first col has a zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // loop through and set firstRow and firstCol as 0-trackers
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // fill in non-first rows and cols with needed 0's
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // fill in first row of 0's
  for (let i = 0; i < cols; i++) {
    if (firstRowHasZero) {
      matrix[0][i] = 0;
    }
  }

  // fill in first col of 0's
  for (let i = 0; i < rows; i++) {
    if (firstColHasZero) {
      matrix[i][0] = 0;
    }
  }
};
