// CTCI 4.8
// Find the first common ancestory of two nodes in a binary tree
// (not necessarily BST)
// Avoid storing nodes in additional data structures

const firstCommonAncestor = (root, node1, node2) => {
  if (root === null) {
    return null;
  }
  if (root === node1 || root === node2) {
    return root;
  }

  const left = firstCommonAncestor(root.left, node1, node2);
  if (left !== null && left !== node1 && left !== node2) {
    // optimization - already found FCA
    return left;
  }

  const right = firstCommonAncestor(root.right, node1, node2);
  if (right !== null && right !== node1 && right !== node2) {
    // optimization - already found FCA
    return right;
  }

  if (left && right) {
    // if this node has node1 on one side and node2 on the other side
    return root;
  }
  return left ? left : right;
};
