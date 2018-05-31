// CTCI 1.5
// check if two strings are one edit (or zero edits) away
// edit = insert / remove / replace

/*
There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. 
Given two strings, write a function to check if they are one edit (or zero edits) away.
EXAMPLE
pale, ple -> true 
pales. pale -> true 
  pale. bale -> true 
  pale. bake -> false
*/

const hasReplacedChar = (str1, str2) => {
  let hasDiffChar = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (hasDiffChar) {
        return false;
      } else {
        hasDiffChar = true;
      }
    }
  }
  return true;
};

const hasInsertedOrRemovedChar = (strShort, strLong) => {
  let hasDiffChar = false;
  let pShort = 0;
  let pLong = 0;
  while (pShort < strShort.length) {
    if (strShort[pShort] !== strLong[pLong]) {
      if (hasDiffChar) {
        return false;
      } else {
        hasDiffChar = true;
        pShort--;
      }
    }
    pShort++;
    pLong++;
  }
  return true;
};

const isOneEditAway = (str1, str2) => {
  // return Bool
  let len1 = str1.length;
  let len2 = str2.length;

  if (len1 === len2) {
    return hasReplacedChar(str1, str2);
  } else if (Math.abs(len1 - len2) === 1) {
    if (len1 > len2) {
      return hasInsertedOrRemovedChar(str2, str1);
    } else {
      return hasInsertedOrRemovedChar(str1, str2);
    }
  } else {
    return false;
  }
};

console.log(isOneEditAway("pale", "bale")); // true
console.log(isOneEditAway("pale", "bake")); // false
console.log(isOneEditAway("pale", "ple")); // true
console.log(isOneEditAway("pales", "pale")); // true
