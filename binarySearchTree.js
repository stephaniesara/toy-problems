class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const insertToSide = (side, node) => {
      if (node[side] === null) {
        node[side] = new BinarySearchTree(value);
      } else {
        node[side].insert(value);
      }
    };

    if (value < this.value) {
      insertToSide("left", this);
    } else {
      insertToSide("right", this);
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      return !!this.left && this.left.contains(value);
    } else {
      return !!this.right && this.right.contains(value);
    }
  }

  depthFirstLog(cb) {
    cb(this.value);
    this.left && this.left.depthFirstLog(cb);
    this.right && this.right.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = BinarySearchTree;
