// CTCI 4.5
// check if a binary tree is a binary search tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, floor, ceil) {
  if (root === null) {
    return true;
  }
  if (
    (floor !== null && root.val <= floor) ||
    (ceil !== null && root.val >= ceil)
  ) {
    return false;
  }
  return (
    isValidBST(root.left, floor, root.val) &&
    isValidBST(root.right, root.val, ceil)
  );
};
