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

  while (read2 >= 0) {
    if (read1 >= 0 && nums1[read1] >= nums2[read2]) {
      nums1[writeInd] = nums1[read1];
      read1--;
    } else {
      nums1[writeInd] = nums2[read2];
      read2--;
    }
    writeInd--;
  }
};
