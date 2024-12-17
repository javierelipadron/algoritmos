class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class SplayTree {
  constructor() {
    this.root = null;
  }

  rightRotate(x) {
    const y = x.left;
    x.left = y.right;
    y.right = x;
    return y;
  }

  leftRotate(x) {
    const y = x.right;
    x.right = y.left;
    y.left = x;
    return y;
  }

  splay(root, key) {
    if (root === null || root.key === key) return root;

    if (root.key > key) {
      if (root.left === null) return root;

      if (root.left.key > key) {
        root.left.left = this.splay(root.left.left, key);
        root = this.rightRotate(root);
      } else if (root.left.key < key) {
        root.left.right = this.splay(root.left.right, key);
        if (root.left.right !== null) root.left = this.leftRotate(root.left);
      }

      return root.left === null ? root : this.rightRotate(root);
    } else {
      if (root.right === null) return root;

      if (root.right.key > key) {
        root.right.left = this.splay(root.right.left, key);
        if (root.right.left !== null) root.right = this.rightRotate(root.right);
      } else if (root.right.key < key) {
        root.right.right = this.splay(root.right.right, key);
        root = this.leftRotate(root);
      }

      return root.right === null ? root : this.leftRotate(root);
    }
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
      return;
    }

    this.root = this.splay(this.root, key);

    if (this.root.key === key) return;

    const newNode = new Node(key);

    if (this.root.key > key) {
      newNode.right = this.root;
      newNode.left = this.root.left;
      this.root.left = null;
    } else {
      newNode.left = this.root;
      newNode.right = this.root.right;
      this.root.right = null;
    }

    this.root = newNode;
  }

  search(key) {
    this.root = this.splay(this.root, key);
    return this.root && this.root.key === key;
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.key);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

// Ejemplo de uso
const tree = new SplayTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

console.log("Preorder traversal of the splay tree:");
tree.preOrder(tree.root);

console.log("Buscar el nodo con clave 20:");
tree.search(20);
tree.preOrder(tree.root);
