// CTCI 4.3
// Given a binary tree, create a linked list of all nodes at each depth
// i.e. if a tree with depth D, there will be D linked lists

// const LinkedList = require("./LinkedList.js");
// linkedlist functions: addToTail, removeHead, contains

const Tree = require("./BinarySearchTree");

const listOfDepths = root => {
  let result = [];
  let curr = [];
  if (root !== null) {
    curr.push(root); // init curr as the first level which is root node
  }
  while (curr.length > 0) {
    result.push(curr); // add each level to result array
    let parents = curr;
    curr = [];
    parents.forEach(node => {
      // iterate nodes in prev level to add children nodes to curr level
      if (node.left) {
        curr.push(node.left);
      }
      if (node.right) {
        curr.push(node.right);
      }
    });
  }
  return result;
};

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

// // modification: if need to keep track of depth D
// const listOfDepths = root => {
//   let result = {};
//   let q = [];
//   if (root !== null) {
//     q.push([root]); // add first level to queue
//   }
//   let depth = 0;
//   while (q.length > 0) {
//     // O(log N) on average b/c loops for each level
//     let parents = q.shift(); // arr of parent nodes
//     let children = [];
//     result[depth] = [];
//     parents.forEach(node => {
//       result[depth].push(node);
//       if (node.left) {
//         children.push(node.left);
//       }
//       if (node.right) {
//         children.push(node.right);
//       }
//     });
//     if (children.length > 0) {
//       q.push(children);
//     }
//     depth++;
//   }
//   return result;
// };
