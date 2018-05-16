// A<->B<->C<->D<->E<->F<->A

//        F
//     /     \
//    B       H
//   / \     /
//  A   D   G
//     / \
//    C   E

// loop through all elems in tree in order
// curr node (ex: c)
// curr.left = prev
// prev.right = curr

class BSTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  connectLists(left, right) {
    let head = this;
    let tail = this;
    if (left) {
      // connect left LL to root, and move 'head' to start of left LL
      let leftTail = left.left || left;
      leftTail.right = this;
      this.left = leftTail;
      head = left;
    }
    if (right) {
      // connect root to right LL, and move 'tail' to end of right LL
      let rightTail = right.left || right;
      this.right = right;
      right.left = this;
      tail = rightTail;
    }
    // connect head and tail, then return head
    head.left = tail;
    tail.right = head;
    return head;
  }

  convertBSTToLinkedList() {
    if (this === null) {
      return null;
    }
    let left = this.left ? this.left.convertBSTToLinkedList() : null;
    let right = this.right ? this.right.convertBSTToLinkedList() : null;
    return this.connectLists(left, right); // return head of connected lists
  }
}

// TESTS ---------------------------------

// root node has no children
let input = new BSTree("A");
console.log(input.convertBSTToLinkedList()); // A<->A

// root node has some children, tree only goes 1 add'tl level
input = new BSTree("B");
input.left = new BSTree("A");
input.right = new BSTree("C");
console.log(input.convertBSTToLinkedList()); // A<->B<->C<->A

// larger test case, multiple levels
input = new BSTree("F");
input.left = new BSTree("B");
input.left.left = new BSTree("A");
input.left.right = new BSTree("D");
input.left.right.left = new BSTree("C");
input.left.right.right = new BSTree("E");
input.right = new BSTree("H");
input.right.left = new BSTree("G");
console.log(input.convertBSTToLinkedList()); // A<->B<->C<->D<->E<->F<->G<->H<->A

// ARCHIVE -------------------------------

// old code from CodePad
//   let prev;
//   const traverseTree = node => {
//     if (!node) {
//       prev = node.value;
//       return;
//     }
//     traverseTree(node.left);
//     // handle curr node
//     traverseTree(node.right);
//   }
