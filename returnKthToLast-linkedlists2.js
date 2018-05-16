// CTCI 2.2
// Implement an algo to find and return the kth to last elem
// of a singly linked list

/*
    Get Nth element data from the end in a Linked List
    Number of elements in the list will always be greater than N.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function getNodeValue(head, position) {
  let left = head;
  let right = head;
  for (let i = 0; i < position; i++) {
    right = right.next;
  }
  while (right.next) {
    left = left.next;
    right = right.next;
  }
  return left.data;
}
