class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  insert(node, key, value) {
    if (!node) {
      return new Node(key, value);
    }

    if (key < node.key) {
      node.left = this.insert(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key, value);
    } else {
      node.value = value;
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balance = this.getBalanceFactor(node);

    if (balance > 1 && key < node.left.key) {
      return this.rightRotate(node);
    }

    if (balance < -1 && key > node.right.key) {
      return this.leftRotate(node);
    }

    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  insertKey(key, value) {
    this.root = this.insert(this.root, key, value);
  }

  preOrder(node) {
    if (node) {
      console.log(node.key + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

// Ejemplo de uso
const avl = new AVLTree();
avl.insertKey(10, "Value 10");
avl.insertKey(20, "Value 20");
avl.insertKey(30, "Value 30");
avl.insertKey(40, "Value 40");
avl.insertKey(50, "Value 50");
avl.insertKey(25, "Value 25");

console.log("Preorder traversal of the constructed AVL tree is:");
avl.preOrder(avl.root);
