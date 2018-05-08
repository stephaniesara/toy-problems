// PRAMP interview 5.7.18

function spiralCopy(inputMatrix) {
  let output = [];

  let colFirst = 0;
  let colLast = inputMatrix[0].length - 1;
  let rowFirst = 0;
  let rowLast = inputMatrix.length - 1;

  const addToOutput = (row, col) => {
    output.push(inputMatrix[row][col]);
  };

  while (colFirst <= colLast && rowFirst <= rowLast) {
    for (let col = colFirst; col <= colLast; col++) {
      addToOutput(rowFirst, col);
    }
    rowFirst++;

    for (let row = rowFirst; row <= rowLast; row++) {
      addToOutput(row, colLast);
    }
    colLast--;

    if (rowFirst < rowLast) {
      for (let col = colLast; col >= colFirst; col--) {
        addToOutput(rowLast, col);
      }
      rowLast--;
    }

    if (colFirst < colLast) {
      for (let row = rowLast; row >= rowFirst; row--) {
        addToOutput(row, colFirst);
      }
      colFirst++;
    }
  }

  return output;
}

let inputMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

let output = spiralCopy(inputMatrix);
console.log(output);
console.log(output.length); // 20
// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
