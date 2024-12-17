class Node {
  constructor(data, color, left = null, right = null) {
    this.data = data;
    this.color = color;
    this.left = left;
    this.right = right;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.TNULL = new Node(null, 0);
    this.root = this.TNULL;
  }

  // Preorder
  preOrderHelper(node) {
    if (node !== this.TNULL) {
      console.log(node.data + " ");
      this.preOrderHelper(node.left);
      this.preOrderHelper(node.right);
    }
  }

  // Inorder
  inOrderHelper(node) {
    if (node !== this.TNULL) {
      this.inOrderHelper(node.left);
      console.log(node.data + " ");
      this.inOrderHelper(node.right);
    }
  }

  // Post order
  postOrderHelper(node) {
    if (node !== this.TNULL) {
      this.postOrderHelper(node.left);
      this.postOrderHelper(node.right);
      console.log(node.data + " ");
    }
  }

  // Balance the tree after deletion of a node
  fixDelete(x) {
    let s;
    while (x !== this.root && x.color === 0) {
      if (x === x.parent.left) {
        s = x.parent.right;
        if (s.color === 1) {
          s.color = 0;
          x.parent.color = 1;
          this.leftRotate(x.parent);
          s = x.parent.right;
        }

        if (s.left.color === 0 && s.right.color === 0) {
          s.color = 1;
          x = x.parent;
        } else {
          if (s.right.color === 0) {
            s.left.color = 0;
            s.color = 1;
            this.rightRotate(s);
            s = x.parent.right;
          }

          s.color = x.parent.color;
          x.parent.color = 0;
          s.right.color = 0;
          this.leftRotate(x.parent);
          x = this.root;
        }
      } else {
        s = x.parent.left;
        if (s.color === 1) {
          s.color = 0;
          x.parent.color = 1;
          this.rightRotate(x.parent);
          s = x.parent.left;
        }

        if (s.right.color === 0 && s.right.color === 0) {
          s.color = 1;
          x = x.parent;
        } else {
          if (s.left.color === 0) {
            s.right.color = 0;
            s.color = 1;
            this.leftRotate(s);
            s = x.parent.left;
          }

          s.color = x.parent.color;
          x.parent.color = 0;
          s.left.color = 0;
          this.rightRotate(x.parent);
          x = this.root;
        }
      }
    }
    x.color = 0;
  }

  // Balance the tree after insertion of a node
  fixInsert(k) {
    let u;
    while (k.parent.color === 1) {
      if (k.parent === k.parent.parent.right) {
        u = k.parent.parent.left;
        if (u.color === 1) {
          u.color = 0;
          k.parent.color = 0;
          k.parent.parent.color = 1;
          k = k.parent.parent;
        } else {
          if (k === k.parent.left) {
            k = k.parent;
            this.rightRotate(k);
          }
          k.parent.color = 0;
          k.parent.parent.color = 1;
          this.leftRotate(k.parent.parent);
        }
      } else {
        u = k.parent.parent.right;

        if (u.color === 1) {
          u.color = 0;
          k.parent.color = 0;
          k.parent.parent.color = 1;
          k = k.parent.parent;
        } else {
          if (k === k.parent.right) {
            k = k.parent;
            this.leftRotate(k);
          }
          k.parent.color = 0;
          k.parent.parent.color = 1;
          this.rightRotate(k.parent.parent);
        }
      }
      if (k === this.root) {
        break;
      }
    }
    this.root.color = 0;
  }

  // Rotate left at node x
  leftRotate(x) {
    let y = x.right;
    x.right = y.left;
    if (y.left !== this.TNULL) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  // Rotate right at node x
  rightRotate(x) {
    let y = x.left;
    x.left = y.right;
    if (y.right !== this.TNULL) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    y.right = x;
    x.parent = y;
  }

  // Insert the key to the tree in its appropriate position
  insert(key) {
    let node = new Node(key, 1);
    node.parent = null;
    node.data = key;
    node.left = this.TNULL;
    node.right = this.TNULL;
    node.color = 1;

    let y = null;
    let x = this.root;

    while (x !== this.TNULL) {
      y = x;
      if (node.data < x.data) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    node.parent = y;
    if (y === null) {
      this.root = node;
    } else if (node.data < y.data) {
      y.left = node;
    } else {
      y.right = node;
    }

    if (node.parent === null) {
      node.color = 0;
      return;
    }

    if (node.parent.parent === null) {
      return;
    }

    this.fixInsert(node);
  }

  // Delete the node from the tree
  deleteNodeHelper(node, key) {
    let z = this.TNULL;
    let x, y;
    while (node !== this.TNULL) {
      if (node.data === key) {
        z = node;
      }

      if (node.data <= key) {
        node = node.right;
      } else {
        node = node.left;
      }
    }

    if (z === this.TNULL) {
      console.log("Couldn't find key in the tree");
      return;
    }

    y = z;
    let yOriginalColor = y.color;
    if (z.left === this.TNULL) {
      x = z.right;
      this.rbTransplant(z, z.right);
    } else if (z.right === this.TNULL) {
      x = z.left;
      this.rbTransplant(z, z.left);
    } else {
      y = this.minimum(z.right);
      yOriginalColor = y.color;
      x = y.right;
      if (y.parent === z) {
        x.parent = y;
      } else {
        this.rbTransplant(y, y.right);
        y.right = z.right;
        y.right.parent = y;
      }

      this.rbTransplant(z, y);
      y.left = z.left;
      y.left.parent = y;
      y.color = z.color;
    }
    if (yOriginalColor === 0) {
      this.fixDelete(x);
    }
  }

  // Transplant nodes
  rbTransplant(u, v) {
    if (u.parent === null) {
      this.root = v;
    } else if (u === u.parent.left) {
      u.parent.left = v;
    } else {
      u.parent.right = v;
    }
    v.parent = u.parent;
  }

  // Find the node with the minimum key
  minimum(node) {
    while (node.left !== this.TNULL) {
      node = node.left;
    }
    return node;
  }

  // Find the node with the maximum key
  maximum(node) {
    while (node.right !== this.TNULL) {
      node = node.right;
    }
    return node;
  }

  // Find the node with the key
  searchTreeHelper(node, key) {
    if (node === this.TNULL || key === node.data) {
      return node;
    }

    if (key < node.data) {
      return this.searchTreeHelper(node.left, key);
    }
    return this.searchTreeHelper(node.right, key);
  }

  // Preorder
  preorder() {
    this.preOrderHelper(this.root);
  }

  // Inorder
  inorder() {
    this.inOrderHelper(this.root);
  }

  // Post order
  postorder() {
    this.postOrderHelper(this.root);
  }

  // Search the tree
  searchTree(k) {
    return this.searchTreeHelper(this.root, k);
  }

  // Find the node with the minimum key
  minimum() {
    return this.minimum(this.root).data;
  }

  // Find the node with the maximum key
  maximum() {
    return this.maximum(this.root).data;
  }

  // Find the successor of a given node
  successor(x) {
    if (x.right !== this.TNULL) {
      return this.minimum(x.right);
    }

    let y = x.parent;
    while (y !== this.TNULL && x === y.right) {
      x = y;
      y = y.parent;
    }
    return y;
  }

  // Find the predecessor of a given node
  predecessor(x) {
    if (x.left !== this.TNULL) {
      return this.maximum(x.left);
    }

    let y = x.parent;
    while (y !== this.TNULL && x === y.left) {
      x = y;
      y = y.parent;
    }

    return y;
  }

  // Rotate left at node x
  leftRotate(x) {
    let y = x.right;
    x.right = y.left;
    if (y.left !== this.TNULL) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  // Rotate right at node x
  rightRotate(x) {
    let y = x.left;
    x.left = y.right;
    if (y.right !== this.TNULL) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    y.right = x;
    x.parent = y;
  }

  // Insert the key to the tree in its appropriate position
  insert(key) {
    let node = new Node(key, 1);
    node.parent = null;
    node.data = key;
    node.left = this.TNULL;
    node.right = this.TNULL;
    node.color = 1;

    let y = null;
    let x = this.root;

    while (x !== this.TNULL) {
      y = x;
      if (node.data < x.data) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    node.parent = y;
    if (y === null) {
      this.root = node;
    } else if (node.data < y.data) {
      y.left = node;
    } else {
      y.right = node;
    }

    if (node.parent === null) {
      node.color = 0;
      return;
    }

    if (node.parent.parent === null) {
      return;
    }

    this.fixInsert(node);
  }

  // Delete the node from the tree
  deleteNode(data) {
    this.deleteNodeHelper(this.root, data);
  }
}

// Example usage
let tree = new RedBlackTree();
tree.insert(55);
tree.insert(40);
tree.insert(65);
tree.insert(60);
tree.insert(75);
tree.insert(57);

console.log("Inorder traversal:");
tree.inorder();

console.log("Preorder traversal:");
tree.preorder();

console.log("Postorder traversal:");
tree.postorder();
