// CTCI 10.3
// Given a sorted array of n integers that has been rotated
// an unknown number of times, find a target elem in array.
// Assume input arr was originally ordered in increasing order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, left = 0, right = nums.length - 1) {
  if (right < left) {
    return -1;
  }
  let mid = Math.ceil((left + right) / 2);
  if (target === nums[mid]) {
    return mid;
  }
  if (nums[left] < nums[mid]) {
    // left is sorted
    if (target < nums[mid] && target >= nums[left]) {
      return search(nums, target, left, mid - 1); // search left
    } else {
      return search(nums, target, mid + 1, right); // search right
    }
  } else {
    // right is sorted
    if (target > nums[mid] && target <= nums[right]) {
      return search(nums, target, mid + 1, right); // search right
    } else {
      return search(nums, target, left, mid - 1); // search left
    }
  }
};
