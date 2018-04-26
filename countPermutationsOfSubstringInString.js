const countPermutationsOfSubstringInString = (short, long) => {
  let count = 0;

  const isStringPermutationOf = (str1, str2) => {
    // TODO
    return true;
  };

  long.split("").forEach((char, index) => {
    if (isStringPermutationOf(long.substring(index, short.length), short)) {
      count++;
    }
  });

  return count;
};

// TESTS ------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let short = "abbc";
let long = "cbabadcbbabbcbabaabccbabc";
let expected = 7;
expect(countPermutationsOfSubstringInString(short, long), expected);
