// CTCI 2.3
// delete a node that is not the first or last elem of a linked list,
// given only access to that node
// note: nothing is returned

const deleteMiddleNode = (list, target) => {
  let prev = list.head;
  let curr = list.head.next;
  while (curr) {
    if (curr.value === target) {
      prev.next = curr.next;
      list.count--;
    }
    prev = curr;
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

const getTraversedNodeValues = list => {
  let curr = list.head;
  let result = [];
  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }
  return result;
};

let linkedList = LinkedList();
expect(linkedList.countNodes(), 0);
linkedList.addToTail(4);
linkedList.addToTail(5);
linkedList.addToTail(6);
linkedList.addToTail(7);
expect(linkedList.contains(4), true);
expect(linkedList.countNodes(), 4);

let input = 6;
let expected = 3;
deleteMiddleNode(linkedList, input);
expect(linkedList.countNodes(), expected);
expected = [4, 5, 7];
expect(getTraversedNodeValues(linkedList), expected);

input = 5;
expected = 2;
deleteMiddleNode(linkedList, input);
expect(linkedList.countNodes(), expected);
expected = [4, 7];
expect(getTraversedNodeValues(linkedList), expected);
