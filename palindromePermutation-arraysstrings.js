// CTCI 1.4
// write a function to check if a string is a permutation of a palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let letters = {};
  let count = 0;
  s.split("").forEach(char => {
    if (letters[char] === true) {
      letters[char] = false;
      count--;
    } else {
      letters[char] = true;
      count++;
    }
  });
  return count <= 1;
};
