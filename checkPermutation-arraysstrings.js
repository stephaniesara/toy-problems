// CTCI 1.2
// Given two str, write method to decide if one is permutation of other

const checkPermutation = (str1, str2) => {
  let len2 = str2.length;
  if (str1.length !== len2) {
    return false;
  }

  let obj1 = str1.split("").reduce((obj, curr) => {
    if (obj[curr]) {
      obj[curr]++;
    } else {
      obj[curr] = 1;
    }
    return obj;
  }, {});

  for (let i = 0; i < len2; i++) {
    let char = str2[i];
    if (obj1[char]) {
      obj1[char]--;
      if (obj1[char] === 0) {
        delete obj1[char];
      }
    } else {
      return false;
    }
  }

  return Object.keys(obj1).length === 0;
};

// TESTS ------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let str1 = "helloworld";
let str2 = "hello";
let expected = false;
expect(checkPermutation(str1, str2), expected);

str1 = "yesterday";
str2 = "yterdyase";
expected = true;
expect(checkPermutation(str1, str2), expected);

str1 = "yesterday";
str2 = "ydstehel";
expected = false;
expect(checkPermutation(str1, str2), expected);

str1 = "";
str2 = "a";
expected = false;
expect(checkPermutation(str1, str2), expected);

str1 = "hellothere";
str2 = "hellothere";
expected = true;
expect(checkPermutation(str1, str2), expected);
