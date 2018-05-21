// find height of a binary tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const heightOfBinaryTree = node => {
  if (node === null) {
    return 0;
  }
  return (
    1 + Math.max(heightOfBinaryTree(node.left), heightOfBinaryTree(node.right))
  );
};

// TESTS ---------------------------------

let input = null;
console.log(heightOfBinaryTree(input)); // 0

// root node has no children
input = new Node("A");
console.log(heightOfBinaryTree(input)); // 1

// root node has some children, tree only goes 1 add'tl level
input = new Node("B");
input.left = new Node("A");
input.right = new Node("C");
console.log(heightOfBinaryTree(input)); // 2

// larger test case, multiple levels
input = new Node("F");
input.left = new Node("B");
input.left.left = new Node("A");
input.left.right = new Node("D");
input.left.right.left = new Node("C");
input.left.right.right = new Node("E");
input.right = new Node("H");
input.right.left = new Node("G");
console.log(heightOfBinaryTree(input)); // 4
