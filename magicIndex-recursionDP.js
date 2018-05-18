// CTCI 8.3
// Given a sorted arr of distinct integers, find a magic index if one exists
// magic index: arr[i] === i

const magicIndex = (arr, lower = 0, upper = arr.length - 1) => {
  if (upper < lower) {
    return -1;
  }
  let mid = Math.ceil((upper + lower) / 2);
  if (arr[mid] === mid) {
    return mid;
  } else if (arr[mid] < mid) {
    return magicIndex(arr, mid + 1, upper);
  } else {
    return magicIndex(arr, lower, mid - 1);
  }
};

const magicIndexNotDistinct = (arr, lower = 0, upper = arr.length - 1) => {
  if (upper < lower) {
    return -1;
  }
  let mid = Math.ceil((upper + lower) / 2);
  if (arr[mid] === mid) {
    return mid;
  }
  // need to search both left and right
  let left = magicIndexNotDistinct(arr, mid + 1, upper);
  if (left >= 0) {
    return left;
  }
  return magicIndexNotDistinct(arr, lower, mid - 1);
};

// TESTS ----------------------------

console.log(magicIndex([])); // -1
console.log(magicIndex([0, 4, 7, 9, 11])); // 0
console.log(magicIndex([-5, -3, 1, 3, 5, 10, 20, 30])); // 3
console.log(magicIndex([-5, -3, 1, 4, 5, 10, 20, 30])); // -1

// if values are not distinct
console.log(magicIndexNotDistinct([-5, -3, 1, 3, 3, 3, 5, 10, 20, 30])); // 3
