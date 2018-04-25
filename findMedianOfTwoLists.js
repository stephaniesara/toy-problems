const findMedianOfTwoLists = (listA, listB) => {
  const n = listA.length;

  // helper func to calculate avg of two nums
  const getAverage = (a, b) => (a + b) / 2;

  // edge case, n < 2
  if (n === 1) {
    return getAverage(listA[0], listB[0]);
  }

  // base case, n is 2 -> concat the two lists and return median of those 4 numbers
  if (n === 2) {
    const combined = listA.concat(listB).sort();
    return getAverage(combined[1], combined[2]);
  }

  // get elements at midpoints
  const mid = Math.floor(n / 2);
  let elemA = listA[mid];
  let elemB = listB[mid];

  // special case -> the midpoint nums are the medians, return their average
  if (elemA === elemB) {
    return getAverage(elemA, elemB);
  }

  // recursively search opposite halves of the two lists
  const adjustedMid = n % 2 ? mid : mid - 1; // to account for n is even
  if (elemA < elemB) {
    return findMedianOfTwoLists(
      listA.slice(adjustedMid),
      listB.slice(0, mid + 1)
    );
  } else {
    return findMedianOfTwoLists(
      listA.slice(0, mid + 1),
      listB.slice(adjustedMid)
    );
  }
};

// TESTS ------------------------------>

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

// n < 2, edge case
var listA = [1];
var listB = [3];
expect(findMedianOfTwoLists(listA, listB), 2);

// n is odd, all numbers in one list are smaller than all nums in other
listA = [1, 2, 3];
listB = [4, 5, 6];
expect(findMedianOfTwoLists(listA, listB), 3.5);

// n is odd
listA = [1, 5, 9, 100, 101];
listB = [3, 6, 7, 8, 11];
expect(findMedianOfTwoLists(listA, listB), 7.5);

// n is even
listA = [1, 5, 9, 100];
listB = [3, 6, 7, 8];
expect(findMedianOfTwoLists(listA, listB), 6.5);

// n is even, the lists are reversed from previous test
listA = [3, 6, 7, 8];
listB = [1, 5, 9, 100];
expect(findMedianOfTwoLists(listA, listB), 6.5);

// n is even, median is duplicated numbers
listA = [1, 3, 4, 6];
listB = [6, 7, 100, 1000];
expect(findMedianOfTwoLists(listA, listB), 6);
