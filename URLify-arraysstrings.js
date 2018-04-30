// CTCI 1.3
// Write a method to replace all spaces in a str with '%20'
// Assume: str has space at end to hold addtl char
// Assume: you are given the "true" length of the str

const URLify = (str, len) => {
  let result = "";
  let strArr = str.split(" ");
  let numSpaces = (str.length - len) / 2;
  for (let i = 0; i < strArr.length; i++) {
    result += strArr[i];
    if (numSpaces === 0) {
      break;
    }
    result += "%20";
    numSpaces--;
  }
  return result;
};

// TESTS ------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let str = "Mr John Smith    ";
let len = 13;
expect(URLify(str, len), "Mr%20John%20Smith");
