// implement an lru cache
// get(key), set(key, value), remove(key)
// ensure O(1) operations for get, set

const LruCache = limit => {
  this.limit = limit.limit;
  this.size = 0;
  this.items = {};
  this.head = null;
  this.tail = null;
};

const LruNode = (key, value) => {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};

LruCache.prototype._setHead = node => {
  const oldHead = this.head;
  if (oldHead) {
    oldHead.prev = node;
  }
  this.head = node;
  node.prev = null;
  node.next = oldHead;
  if (this.tail === null) {
    this.tail = node;
  }
  this.size++;
  this.items[node.key] = node;
};

LruCache.prototype.set = (key, value) => {
  const newNode = new LruNode(key, value);
  // if key is already in this.items, update that item and remove the node
  // else if size >= limit, get key of last item in list, remove last node from list, remove that item from items,
  // set new node as head
  if (this.items[key]) {
    this.items[key].value = value;
    this.remove(key);
  } else if (this.size >= this.limit) {
    const lastNode = this.list.tail;
    delete this.items[lastNode.key];
    this.remove(lastNode);
  }
  this._setHead(newNode);
};

LruCache.prototype.get = key => {
  const node = this.items[key];
  if (node) {
    const value = node.value;
    this.remove(key);
    this._setHead(node);
    return value;
  }
  return null; // key does not exist in cache
};

LruCache.prototype._removeNode = node => {
  const prev = node.prev;
  const next = node.next;
  if (prev) {
    prev.next = next;
  } else {
    this.head = next;
  }
  if (next) {
    next.prev = prev;
  } else {
    this.tail = prev;
  }
};

LruCache.prototype.remove = key => {
  const node = this.items[key];
  if (node) {
    this.size--;
    this._removeNode(node);
    delete this.items[key];
  }
};

LruCache.prototype.removeAll = () => {
  this.items = {};
  this.head = null;
  this.tail = null;
  this.size = 0;
};

LruCache.prototype.forEach = iterator => {
  let curr = this.head;
  while (curr) {
    curr.value = iterator(curr.value);
    curr = curr.next;
  }
};
