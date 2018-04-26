const countPairsWithKDifference = (arr, k) => {
  let count = 0;
  let numsObj = arr.reduce((obj, curr) => {
    obj[curr] = true;
    return obj;
  }, {});
  arr.forEach(num => {
    if (numsObj[num - k]) {
      count++;
    }
    if (numsObj[num + k]) {
      count++;
    }
    numsObj[num] = false;
  });

  return count;
};

// TESTS -------------------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let arr = [1, 6, 3, 8, 5, 4];
let k = 5;
let output = 2;
expect(countPairsWithKDifference(arr, k), output);
