// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).

// halve array using pointers
const searchRotatedArray = (arr, target, start = 0, end) => {
  // define end if not provided, i.e. upon first iteration
  end = end === undefined ? arr.length : end;

  // calculate midpoint
  let mid = Math.floor((end + start) / 2);

  // base cases
  // target is found at midpoint
  if (target === arr[mid]) {
    return mid;
  }
  // target is not found
  if (start >= end - 1) {
    return -1;
  }

  // helpers - recursively search elems to left or right of midpoint
  const searchLeft = () => {
    return searchRotatedArray(arr, target, start, mid);
  };
  const searchRight = () => {
    mid = end % 2 ? mid + 1 : mid;
    return searchRotatedArray(arr, target, mid, end);
  };

  // four cases to determine which half of array to search
  // if left half is sorted
  if (arr[start] < arr[mid]) {
    if (target < arr[mid] && target >= arr[start]) {
      return searchLeft();
    }
    return searchRight();
  } else {
    // otherwise right half must be sorted
    if (target > arr[mid] && target <= arr[end - 1]) {
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
let expected = 4;
expect(searchRotatedArray(input, target), expected);

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

// leetcode test
input = [4, 5, 6, 7, 8, 1, 2, 3];
target = 8;
expect(searchRotatedArray(input, target), 4);

// leetcode test
input = [4, 5, 6, 7, 0, 1, 2];
target = 0;
expect(searchRotatedArray(input, target), 4);

// leetcode test
input = [4, 5, 6, 7, 0, 1, 2];
target = 6;
expect(searchRotatedArray(input, target), 2);

// leetcode test
input = [7, 8, 1, 2, 3, 4, 5, 6];
target = 2;
expected = 3;
expect(searchRotatedArray(input, target), expected);

// leetcode test
input = [3, 5, 1];
target = 1;
expected = 2;
expect(searchRotatedArray(input, target), expected);

// // halve array using slice
// const searchRotatedArray = (arr, target) => {
//   const end = arr.length;
//   let mid = Math.floor(end / 2);

//   if (target === arr[mid]) {
//     return mid;
//   }
//   if (arr.length <= 1) {
//     return -1;
//   }

//   const searchLeft = () => {
//     return searchRotatedArray(arr.slice(0, mid), target);
//   };
//   const searchRight = () => {
//     mid = end % 2 ? mid + 1 : mid;
//     let nextIteration = searchRotatedArray(arr.slice(mid), target);
//     if (nextIteration !== -1) {
//       return nextIteration + mid;
//     } else {
//       return nextIteration;
//     }
//   };

//   // if left half is sorted
//   if (arr[0] <= arr[mid]) {
//     if (target < arr[mid] && target >= arr[0]) {
//       return searchLeft();
//     }
//     return searchRight();
//   } else {
//     // otherwise right half must be sorted
//     if (target > arr[mid] && target <= arr[end - 1]) {
//       return searchRight();
//     }
//     return searchLeft();
//   }
// };
