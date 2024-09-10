class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let cur = this.root;
    let added = false;

    while (!added) {
      if (val > cur.value) {
        if (!cur.right) {
          cur.right = newNode;
          added = true;
        } else {
          cur = cur.right;
        }
      } else {
        if (!cur.left) {
          cur.left = newNode;
          added = true;
        } else {
          cur = cur.left;
        }
      }
    }
    return this;
  }

  find(val) {
    if (!this.root) return undefined;
    let cur = this.root;

    while (cur) {
      if (val === cur.value) return cur;
      if (val < cur.value) cur = cur.left;
      if (val > cur.value) cur = cur.right;
    }

    return false;
  }

  dfsPreOrder() {
    let values = [];
    let cur = this.root;

    function traverse(cur) {
      values.push(cur.value);
      if (cur.left) traverse(cur.left);
      if (cur.right) traverse(cur.right);
    }

    traverse(cur);
    return values;
  }

  dfsPostOrder() {
    let values = [];
    let cur = this.root;

    function traverse(cur) {
      if (cur.left) traverse(cur.left);
      if (cur.right) traverse(cur.right);
      values.push(cur.value);
    }

    traverse(cur);
    return values;
  }

  dfsInOrder() {
    let values = [];
    let curNode = this.root;

    function traverse(cur) {
      if (cur.left) traverse(cur.left);
      values.push(cur.value);
      if (cur.right) traverse(cur.right);
    }

    traverse(curNode);
    return values;
  }

  bfs() {
    let values = [];
    let cur = this.root;
    let queue = [cur];

    while (queue.length) {
      cur = queue.shift();
      values.push(cur.value);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }

    return values;
  }
}
