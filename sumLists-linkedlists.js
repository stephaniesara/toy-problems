// CTCI 2.5
// you have two nums represented by a linked list, where each node contains a single digit.
// Add the two nums and return the sum as a linked list.
// 1) input has digits in reverse order
// 2) input has digits in forward order

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    if (this.head) {
      let prevHead = this.head;
      this.head = this.head.next;
      return prevHead.value;
    }
    return null;
  };

  list.contains = function(target) {
    let curr = this.head;
    while (curr) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// NOTE: did not run this solution
const sumLists = (listA, listB) => {
  let result = LinkedList();
  let carry = 0;

  while (listA !== null || listB !== null) {
    let sum = (listA ? listA.value : 0) + (listB ? listB.value : 0) + carry;
    carry = sum / 10;
    result.addToTail(Node(sum % 10));
    if (listA) {
      listA = listA.next;
    }
    if (listB) {
      listB = listB.next;
    }
  }
  if (carry > 0) {
    result.addToTail(Node(carry));
  }
  return result.head;
};
