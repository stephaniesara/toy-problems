// CTCI 4.6
// find the "next" node (in-order successor) of a given node in a BST
// assume each node has a link to its parent

class Node {
  constructor(value, parent = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

const getLeftMostNode = node => {
  if (node.left) {
    return getLeftMostNode(node.left);
  } else {
    return node.value;
  }
};

const successor = node => {
  if (node === null) {
    return null;
  } else if (node.right) {
    return getLeftMostNode(node.right);
  } else {
    let parent = node.parent;
    while (parent !== null && parent.left != node) {
      node = parent;
      parent = parent.parent;
    }
    return parent ? parent.value : null; // returns null if node has no parent
  }
};

// TESTS ---------------------------------

// let input = null;
// console.log(successor(input)); // null

// root node has no children
input = new Node("A");
console.log(successor(input)); // null

// root node has some children, tree only goes 1 add'tl level
input = new Node("B");
input.left = new Node("A", input);
input.right = new Node("C", input);
console.log(successor(input)); // "C"

// larger test case, multiple levels
input = new Node("F");
input.left = new Node("B", input);
input.left.left = new Node("A", input.left);
input.left.right = new Node("D", input.left);
input.left.right.left = new Node("C", input.left.right);
input.left.right.right = new Node("E", input.left.right);
input.right = new Node("H", input);
input.right.left = new Node("G", input.right);
console.log(successor(input)); // "G"
console.log(successor(input.left)); // "C"
console.log(successor(input.left.right)); // "E"
console.log(successor(input.right.left)); // "H"
console.log(successor(input.right)); // null
