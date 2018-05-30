// CTCI 4.2
// Given a sorted array (increasing order) with unique int elems, create BST w/minimal height

// const BST = require("./binarySearchTree");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const minimalTree = (arr, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return null;
  }
  let mid = Math.ceil((start + end) / 2);
  let root = new Node(arr[mid]);
  root.left = minimalTree(arr, start, mid - 1);
  root.right = minimalTree(arr, mid + 1, end);
  return root;
};

// TESTS -------------------------------------------

let input = [1, 2, 3, 4, 5, 6, 7];
let tree = minimalTree(input);
console.log(tree);
console.log(tree.right.right.value); // 7
console.log(tree.right.right.right); // null
console.log(tree.right.right.left); // null
