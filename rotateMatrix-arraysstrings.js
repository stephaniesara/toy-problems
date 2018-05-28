// CTCI 1.7
// Given an nxn matrix, rotate it in place 90 degrees clockwise

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  let n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let last = n - layer - 1;
    for (let i = layer; i < last; i++) {
      let inverse = n - 1 - i;
      let temp = matrix[layer][i]; // save temp
      matrix[layer][i] = matrix[inverse][layer]; // top = left
      matrix[inverse][layer] = matrix[last][inverse]; // left = bottom
      matrix[last][inverse] = matrix[i][last]; // bottom = right
      matrix[i][last] = temp; // right = temp
    }
  }
};
