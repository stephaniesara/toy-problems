// CTCI 2.1
// Remove duplicates from an unsorted linked list
// follow-up - how to solve if temp buffer not allowed?

// // using temporary buffer, O(N) time and space
// const removeDups = list => {
//   let nodes = {};
//   let prev = list.head;
//   let curr = list.head;
//   while (curr) {
//     if (nodes[curr.value]) {
//       list.removeNode(curr, prev);
//     } else {
//       nodes[curr.value] = true;
//     }
//     prev = curr;
//     curr = curr.next;
//   }
// };

// w/o temp buffer, O(N^2) time and O(1) space
const removeDups = list => {
  let curr = list.head;
  while (curr) {
    let runner = curr;
    while (runner && runner.next) {
      if (runner.next.value === curr.value) {
        list.removeNode(runner.next, runner);
      }
      runner = runner.next;
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
linkedList.addToTail(4);
expect(linkedList.contains(4), true);
expect(linkedList.countNodes(), 2);
removeDups(linkedList);
expect(linkedList.contains(4), true);
expect(linkedList.countNodes(), 1);
