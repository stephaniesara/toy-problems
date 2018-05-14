// CTCI 10.1
// Given two sorted arrays A and B, where A has a large enough buffer to hold B,
// write a method to merge B into A in sorted order.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  let writeInd = m + n - 1;
  let read1 = m - 1;
  let read2 = n - 1;

  const write = (arr, ind) => {
    nums1[writeInd] = arr[ind];
    return ind - 1;
  };

  while (writeInd >= 0) {
    if (read1 >= 0 && read2 >= 0) {
      if (nums1[read1] >= nums2[read2]) {
        read1 = write(nums1, read1);
      } else {
        read2 = write(nums2, read2);
      }
    } else if (read2 >= 0) {
      read2 = write(nums2, read2);
    } else {
      break;
    }
    writeInd--;
  }
};
