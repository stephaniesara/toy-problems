// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).

const searchRotatedArray = (arr, target, start = 0, end) => {
  // define end if not provided, i.e. upon first iteration
  end = end === undefined ? arr.length - 1 : end;

  // calculate midpoint
  const mid = Math.floor((end + start) / 2);

  // base cases
  // target is found at midpoint
  if (target === arr[mid]) {
    return mid;
  }
  // target is not found
  if (start >= end) {
    return -1;
  }

  // helpers - recursively search elems to left or right of midpoint
  const searchLeft = () => {
    return searchRotatedArray(arr, target, start, mid);
  };
  const searchRight = () => {
    return searchRotatedArray(arr, target, mid + 1, end);
  };

  // four cases to determine which half of array to search
  if (target > arr[mid]) {
    if (target > arr[end]) {
      return searchLeft();
    }
    return searchRight();
  } else {
    if (target < arr[start]) {
      return searchRight();
    }
    return searchLeft();
  }
};

// TESTS ------------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

// array is sorted but not rotated, target is found
let input = [0, 1, 2, 4, 6, 9];
let target = 6;
expect(searchRotatedArray(input, target), 4);

// array is sorted but not rotated, target is NOT found
input = [0, 1, 2, 4, 6, 9];
target = 50;
expect(searchRotatedArray(input, target), -1);

// array is rotated, target is at rotated position (to right)
input = [4, 5, 6, 7, 0, 1, 2];
target = 2;
expect(searchRotatedArray(input, target), 6);

// array is rotated, target is at rotated position (to left)
input = [7, 0, 1, 2, 4, 5, 6];
target = 7;
expect(searchRotatedArray(input, target), 0);

// array is rotated, target is NOT found
input = [7, 0, 1, 2, 4, 5, 6];
target = 8;
expect(searchRotatedArray(input, target), -1);
