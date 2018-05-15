// CTCI 8.1
// A child is running up a staircase with n steps
// Can hop either 1, 2 or 3 steps at a time
// Count how many possible ways the child can run up the stairs

const tripleStep = n => {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  }
  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
};

// TESTS ----------------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let input = 3;
let expected = 4;
expect(tripleStep(input), expected);

input = 0;
expected = 1;
expect(tripleStep(input), expected);

input = 1;
expected = 1;
expect(tripleStep(input), expected);

input = 10;
expected = 274; //?
expect(tripleStep(input), expected);

// // original answer, using for loop
// const tripleStep = n => {
//   let count = 0;
//   if (n === 0) {
//     return 1;
//   } else if (n < 0) {
//     return 0;
//   }
//   for (let i = 1; i <= 3; i++) {
//     let newSum = n - i;
//     count += tripleStep(newSum);
//   }
//   return count;
// };
