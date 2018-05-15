// CTCI 10.2
// Sort an arr of strings so that all anagrams are next to each other

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let anagrams = {};

  strs.forEach(function(str) {
    let sorted = str
      .split("")
      .sort()
      .join("");
    if (!anagrams[sorted]) {
      anagrams[sorted] = [];
    }
    anagrams[sorted].push(str);
  });

  let result = [];
  for (let key in anagrams) {
    result.push(anagrams[key]);
  }
  return result;
};
