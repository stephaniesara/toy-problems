// CTCI 90
// Implement an algo to determine if a string has all unique chars.
// What if you cannot use addtl data structures?

const isUnique = str => {
  let uniques = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (uniques[char]) {
      return false;
    }
    uniques[char] = true;
  }

  return true;
};

// const isUnique = str => {
//   if (str.length < 2) {
//     return true;
//   }
//   let sorted = str.split("").sort(); // O(n log n)
//   let prev = sorted[0];
//   for (let i = 1; i < str.length; i++) {
//     // O(n)
//     let curr = sorted[i];
//     if (curr === prev) {
//       return false;
//     }
//     prev = curr;
//   }
//   return true;
// };

// TESTS ------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let input = "hello";
let expected = false;
expect(isUnique(input), expected);

input = "a";
expected = true;
expect(isUnique(input), expected);

input = "aa";
expected = false;
expect(isUnique(input), expected);

input = "helllo";
expected = false;
expect(isUnique(input), expected);

input = "";
expected = true;
expect(isUnique(input), expected);

input = "abacadaba";
expected = false;
expect(isUnique(input), expected);
