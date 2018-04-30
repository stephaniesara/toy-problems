// CTCI 2.2
// Implement an algo to find and return the kth to last elem
// of a singly linked list

const returnKthToLast = (list, k) => {
  if (k >= list.count || k < 0) {
    return null;
  }
  let index = 0;
  let curr = list.head;
  while (curr) {
    index++;
    if (index === list.count - k) {
      return curr.value;
    }
    curr = curr.next;
  }
};

// LINKED LIST IMPLEMENTATION ------------------

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.countNodes = function() {
    return this.count;
  };

  list.removeNode = function(curr, prev) {
    // if (!prev) {
    //   prev = list.head;
    //   while (prev !== curr) {
    //     prev = prev.next;
    //   }
    // }
    if (curr === this.tail) {
      this.tail = prev;
    }
    prev.next = curr.next;
    this.count--;
  };

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.count++;
  };

  list.removeHead = function() {
    if (this.head) {
      let prevHead = this.head;
      this.head = this.head.next;
      list.count--;
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

/*
 * Complexity: What is the time complexity of the above functions?
 */

// TESTS ------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let linkedList = LinkedList();
expect(linkedList.countNodes(), 0);
linkedList.addToTail(4);
linkedList.addToTail(5);
linkedList.addToTail(6);
expect(linkedList.contains(4), true);
expect(linkedList.countNodes(), 3);

let k = 0;
let expected = 6;
expect(returnKthToLast(linkedList, k), expected);

k = 1;
expected = 5;
expect(returnKthToLast(linkedList, k), expected);

k = 2;
expected = 4;
expect(returnKthToLast(linkedList, k), expected);

k = 3;
expected = null;
expect(returnKthToLast(linkedList, k), expected);

k = -1;
expected = null;
expect(returnKthToLast(linkedList, k), expected);
