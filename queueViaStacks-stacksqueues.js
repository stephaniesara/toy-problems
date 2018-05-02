// CTCI 3.4
// Implement a MyQueue class which implements a queue using two stacks

class MyQueue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  size() {
    return this.inbox.length + this.outbox.length;
  }

  add(value) {
    this.inbox.push(value);
  }

  _moveElemsFromInboxToOutbox() {
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }

  remove() {
    if (this.outbox.length === 0) {
      this._moveElemsFromInboxToOutbox();
    }
    return this.outbox.pop();
  }

  peek() {
    if (this.outbox.length === 0) {
      return this.inbox[0];
    } else {
      return this.outbox[this.outbox.length - 1];
    }
  }
}

// TESTS -----------------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let q = new MyQueue();
expect(q.peek(), undefined);
expect(q.remove(), undefined);
q.add("a");
q.add("b");
q.add("c");
expect(q.size(), 3);
expect(q.remove(), "a");
expect(q.peek(), "b");
expect(q.remove(), "b");
expect(q.size(), 1);
expect(q.peek(), "c");
