// CTCI 1.6
// 'aabcccccaaa' => 'a2b1c5a3'
// if compressed is smaller than original string, return original string

const stringCompression = str => {
  let result = "";
  let prev = str[0];
  result += prev;
  let count = 1;
  let curr = 1;
  while (curr < str.length) {
    if (prev === str[curr]) {
      count++;
    } else {
      result += String(count) + str[curr];
      count = 1;
      prev = str[curr];
    }
    curr++;
  }
  result += String(count);
  return result.length <= str.length ? result : str;
};

// TESTS

console.log(stringCompression("aabcccccaaa")); // 'a2b1c5a3'
console.log(stringCompression("abcd")); // 'abcd'
