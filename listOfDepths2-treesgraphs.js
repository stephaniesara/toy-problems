// CTCI 4.3
// Given a binary tree, create a linked list of all nodes at each depth
// i.e. if a tree with depth D, there will be D linked lists

// const LinkedList = require("./LinkedList.js");
// linkedlist functions: addToTail, removeHead, contains

const Tree = require("./BinarySearchTree");

// using hash table with arrays
const listOfDepths = (root, level = 0, result = {}) => {
  if (root === null) {
    return;
  }
  if (!result[level]) {
    result[level] = [];
  }
  result[level].push(root.value);
  listOfDepths(root.left, level + 1, result);
  listOfDepths(root.right, level + 1, result);
  return result;
};

// // using array with arrays
// const listOfDepths = (root, level = 0, lists = []) => {
//   if (root === null) {
//     return;
//   }
//   let list;
//   if (lists.length <= level) {
//     list = [];
//     lists.push(list);
//   } else {
//     list = lists[level];
//   }
//   list.push(root.value);
//   listOfDepths(root.left, level + 1, lists);
//   listOfDepths(root.right, level + 1, lists);
//   return lists;
// };

// TESTS ---------------------

let tree = new Tree(4);
tree.left = new Tree(2);
tree.right = new Tree(6);
tree.left.left = new Tree(1);
tree.left.right = new Tree(3);
tree.right.left = new Tree(5);
tree.right.right = new Tree(7);
// console.log(tree);
console.log(listOfDepths(tree)); // prints nodes at each level, [4, 0], [2, 1], [6, 1], [1, 2], [3, 2], [5, 2], [7, 2]
