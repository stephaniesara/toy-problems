// CTCI 4.2
// Given a sorted array (increasing order) with unique int elems, create BST w/minimal height

const BST = require("./binarySearchTree");

const minimalTree = (arr, startInd = 0, endInd = arr.length - 1) => {
  if (startInd > endInd) {
    return null;
  }
  let mid = Math.floor((startInd + endInd) / 2);
  let node = new BST(arr[mid]);
  node.left = minimalTree(arr, startInd, mid - 1);
  node.right = minimalTree(arr, mid + 1, endInd);
  return node;
};

// TESTS -------------------------------------------

let input = [1, 2, 3, 4, 5, 6, 7];
let tree = minimalTree(input);
console.log(tree);
console.log(tree.right.right.value); // 7
console.log(tree.right.right.right); // null
console.log(tree.right.right.left); // null
