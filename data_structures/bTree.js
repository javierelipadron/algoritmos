class Node {
  constructor(order) {
    this.order = order;
    this.keys = [];
    this.children = [];
  }

  isLeaf() {
    return this.children.length === 0;
  }

  isFull() {
    return this.keys.length === this.order - 1;
  }
}

class BTree {
  constructor(order) {
    this.order = order;
    this.root = new Node(order);
  }

  insert(key) {
    const root = this.root;
    if (root.isFull()) {
      const newRoot = new Node(this.order);
      newRoot.children.push(root);
      this.splitChild(newRoot, 0);
      this.root = newRoot;
    }
    this.insertNonFull(this.root, key);
  }

  splitChild(parent, index) {
    const order = this.order;
    const node = parent.children[index];
    const newNode = new Node(order);
    const midIndex = Math.floor(order / 2);

    parent.keys.splice(index, 0, node.keys[midIndex]);
    parent.children.splice(index + 1, 0, newNode);

    newNode.keys = node.keys.splice(midIndex + 1);
    if (!node.isLeaf()) {
      newNode.children = node.children.splice(midIndex + 1);
    }
    node.keys.splice(midIndex, 1);
  }

  insertNonFull(node, key) {
    if (node.isLeaf()) {
      const index = this.findInsertIndex(node.keys, key);
      node.keys.splice(index, 0, key);
    } else {
      const index = this.findInsertIndex(node.keys, key);
      if (node.children[index].isFull()) {
        this.splitChild(node, index);
        if (key > node.keys[index]) {
          index++;
        }
      }
      this.insertNonFull(node.children[index], key);
    }
  }

  findInsertIndex(keys, key) {
    let index = 0;
    while (index < keys.length && key > keys[index]) {
      index++;
    }
    return index;
  }

  traverse(node = this.root) {
    if (node) {
      for (let i = 0; i < node.keys.length; i++) {
        if (!node.isLeaf()) {
          this.traverse(node.children[i]);
        }
        console.log(node.keys[i]);
      }
      if (!node.isLeaf()) {
        this.traverse(node.children[node.keys.length]);
      }
    }
  }
}

// Ejemplo de uso
const btree = new BTree(3);
btree.insert(10);
btree.insert(20);
btree.insert(5);
btree.insert(6);
btree.insert(12);
btree.insert(30);
btree.insert(7);
btree.insert(17);

console.log("Traversal del B-Tree:");
btree.traverse();
