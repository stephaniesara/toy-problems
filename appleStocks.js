// Interview Cake 1

// O(N) time and O(1) space
const appleStocks = input => {
  let len = input.length;
  if (len < 2) {
    return "error, not enough information";
  }
  let maxDiff = input[1] - input[0];
  let min = input[0];

  for (let i = 2; i < len; i++) {
    min = Math.min(min, input[i - 1]);
    maxDiff = Math.max(maxDiff, input[i] - min);
  }

  return maxDiff;
};

// // O(2n) time and O(n) space -> we could do better!
// const appleStocks = input => {
//   let max = 0;
//   let len = input.length;

//   let maxes = [];
//   for (let i = len - 1; i >= 0; i--) {
//     maxes[i] = Math.max(input[i], maxes[i + 1] || input[len - 1]);
//   }

//   for (let i = 0; i < len; i++) {
//     let diff = maxes[i] - input[i];
//     if (diff > max) {
//       max = diff;
//     }
//   }

//   return max;
// };

// TESTS -------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let input = [10, 7, 5, 8, 11, 9];
let expected = 6;
expect(appleStocks(input), expected);

input = [5, 7, 9, 11, 22];
expected = 17;
expect(appleStocks(input), expected);

input = [5, 7, 9, 11, 22, 10, 4, 7];
expected = 17;
expect(appleStocks(input), expected);

input = [21, 8, 6, 4, 2];
expected = -2;
expect(appleStocks(input), expected);

input = [21, 8, 6, 4, 2, 4, 6, 9];
expected = 7;
expect(appleStocks(input), expected);
