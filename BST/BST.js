/**
 * BinarySearchTree
 *
 * Log(n)
 */

function compareTo(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

class Node {
  constructor(key, value) {
    this.key = key; // Key of the node
    this.value = value; // Value of the node
    this.left = null; // Left child node
    this.right = null; // Right child node
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Root of the tree
  }

  _size(node) {
    if (node === null) {
      return 0;
    }
    return node.count;
  }

  size() {
    return this._size(this.root);
  }

  _rank(key, node) {
    if (node === null) return 0;
    const comparison = compareTo(key, node.key);
    if (comparison > 0) {
      return 1 + this._size(node.left) + this._rank(key, node.right);
    } else if (comparison < 0) {
      return this._rank(key, node.left);
    } else {
      return this._size(node.left);
    }
  }

  rank(key) {
    return this._rank(key, this.root);
  }

  _insert(node, key, value) {
    /**
     * recursive
     * 1. key in tree => reset value
     * 2. key not in tree => add new node
     */
    if (node === null) {
      return new Node(key, value);
    }

    const comparison = compareTo(key, node.key);
    if (comparison < 0) {
      node.left = this._insert(node.left, key, value);
    } else if (comparison > 0) {
      node.right = this._insert(node.right, key, value);
    } else {
      node.value = value;
    }

    node.count = 1 + this._size(node.left) + this._size(node.right);

    return node;
  }

  put(key, value) {
    this.root = this._insert(this.root, key, value);
  }

  get(key) {
    let current = this.root;
    while (current !== null) {
      const comparison = compareTo(key, current.key);

      if (comparison < 0) {
        current = current.left;
      } else if (comparison > 0) {
        current = current.right;
      } else {
        return current.value;
      }
    }

    return null;
  }

  _min(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  _deleteMin(node) {
    if (node.left === null) return node.right;
    node.left = this._deleteMin(node.left);
    node.count = 1 + this._size(node.left) + this._size(node.right);
    return node;
  }

  _delete(node, key) {
    if (node === null) {
      return null;
    }

    const comparison = compareTo(key, node.key);
    if (comparison < 0) {
      node.left = this._delete(node.left, key);
    } else if (comparison > 0) {
      node.right = this._delete(node.right, key);
    } else {
      // Node to be deleted found
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // Hibbard Deletion
      // Node with two children: Get the in-order successor (smallest in the right subtree)
      const temp = node;
      node = this._min(temp.right);
      node.right = this._deleteMin(temp.right);
      node.left = temp.left;
    }

    node.count = 1 + this._size(node.left) + this._size(node.right);
    return node;
  }

  delete(key) {
    this.root = this._delete(this.root, key);
  }

  _inOrder(node, q) {
    if (node === null) {
      return;
    }
    this._inOrder(node.left, q);
    q.push(node.key);
    this._inOrder(node.right, q);
  }

  iterable() {
    const q = [];
    this._inOrder(this.root, q);
    return q;
  }
}

module.exports = BinarySearchTree;
