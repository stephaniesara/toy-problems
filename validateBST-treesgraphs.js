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
var isValidBST = function(root, min, max) {
  if (root === null) {
    return true;
  }
  if ((min && root.value <= min) || (max && root.value >= max)) {
    return false;
  }
  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
};
