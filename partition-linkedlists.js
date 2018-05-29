// CTCI 2.4
// partition a linked list around a value x such that
// all nodes less than x come before all nodes
// greater than or equal to x

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

const partition = function(node, x) {
  let head = node;
  let tail = node;
  while (node !== null) {
    let next = node.next;
    if (node.val < x) {
      // add to head
      node.next = head;
      head = node;
    } else {
      // add to tail
      node.next = null;
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  return head;
};

// var partition = function(head, x) {
//   let before = new ListNode(null);
//   let beforeHead = before;
//   let after = new ListNode(null);
//   let afterHead = after;

//   let read = head;
//   while (read !== null) {
//     let next = read.next;
//     read.next = null;
//     if (read.val >= x) {
//       after.next = read;
//       after = read;
//     } else {
//       before.next = read;
//       before = read;
//     }
//     read = next;
//   }
//   before.next = afterHead.next;
//   return beforeHead.next;
// };
