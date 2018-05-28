// CTCI 1.5
// check if two strings are one edit (or zero edits) away
// edit = insert / remove / replace

const checkReplacement = (str1, str2) => {
  let unmatched = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (unmatched) {
        return false;
      } else {
        unmatched = true;
      }
    }
  }
  return true;
};

const checkInsertRemove = (str1, str2) => {
  let unmatched = false;
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] !== str2[i]) {
      if (unmatched) {
        return false;
      } else {
        unmatched = true;
        str1 = str1.replace(str1[i], "");
        i--;
      }
    }
  }
  return true;
};

const oneAway = (str1, str2) => {
  if (str1.length === str2.length) {
    // check for replacement
    return checkReplacement(str1, str2);
  } else if (Math.abs(str1.length - str2.length) === 1) {
    // check for removal or insertion
    if (str1.length > str2.length) {
      return checkInsertRemove(str1, str2);
    } else {
      return checkInsertRemove(str2, str1);
    }
  } else {
    return false;
  }
};

// TESTS

console.log(oneAway("pale", "ple")); // true
console.log(oneAway("pales", "pale")); // true
console.log(oneAway("pale", "bale")); // true
console.log(oneAway("pale", "bake")); // false
