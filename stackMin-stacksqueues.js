// CTCI 3.2
// Design a stack which has a func min that returns the min elem.
// Push, pop and min should all operate in O(1) time

class StackWithMin {
  constructor() {
    this.storage = {};
    this.size = 0;
    this.mins = [];
  }

  push(value) {
    this.storage[this.size] = value;
    this.size++;
    if (value < this.min()) {
      this.mins.push(value);
    }
  }

  pop() {
    if (this.size > 0) {
      let result = this.storage[this.size--];
      if (result === this.min()) {
        this.mins.pop();
      }
      return result;
    }
  }

  min() {
    if (this.size === 0) {
      return null;
    }
    return this.mins[this.mins.length - 1];
  }
}
