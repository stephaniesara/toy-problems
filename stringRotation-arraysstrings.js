// CTCI 1.9
// given a method isSubstring which checks if one word is a substring of another,
// and given two strings s1 and s2, check if s2 is a rotation of s1,
// using only one call to isSubstring

const stringRotation = (s1, s2) => {
  if (s1.length === s2.length) {
    return isSubstring(s1 + s1, s2);
  } else {
    return false;
  }
};
