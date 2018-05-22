// CTCI 4.4
// determine if a binary tree is balanced
// balanced = height of the left and right child are the same or differ by max 1
// balanced should hold true for every node, not just root node

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const checkBalanced = node => {
  const traverseNodesForBalance = node => {
    if (node === null) {
      return 0;
    }
    let left = traverseNodesForBalance(node.left);
    let right = traverseNodesForBalance(node.right);
    if (left >= 0 && right >= 0 && Math.abs(left - right) <= 1) {
      return 1 + Math.max(left, right);
    } else {
      return -1;
    }
  };
  return traverseNodesForBalance(node) >= 0;
};

// const heightOfBinaryTree = node => {
//   if (node === null) {
//     return 0;
//   }
//   return (
//     1 + Math.max(heightOfBinaryTree(node.left), heightOfBinaryTree(node.right))
//   );
// };

// TESTS ---------------------------------

let input = null;
console.log(checkBalanced(input)); // true?

// root node has no children
input = new Node("A");
console.log(checkBalanced(input)); // true

// root node has some children, tree only goes 1 add'tl level
input = new Node("B");
input.left = new Node("A");
input.right = new Node("C");
console.log(checkBalanced(input)); // true

// larger test case, multiple levels
input = new Node("F");
input.left = new Node("B");
input.left.left = new Node("A");
input.left.right = new Node("D");
input.left.right.left = new Node("C");
input.left.right.right = new Node("E");
input.right = new Node("H");
input.right.left = new Node("G");
console.log(checkBalanced(input)); // true

// unbalanced
input = new Node("B");
input.left = new Node("A");
input.right = new Node("C");
input.right.right = new Node("D");
input.right.right.right = new Node("E");
console.log(checkBalanced(input)); // false

// unbalanced
input = new Node("B");
input.left = new Node("A");
input.right = new Node("C");
input.right.right = new Node("D");
input.right.right.right = new Node("F");
input.right.right.left = new Node("E");
console.log(checkBalanced(input)); // false
