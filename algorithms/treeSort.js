class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node, result = []) {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.data);
      this.inorder(node.right, result);
    }
    return result;
  }

  treeSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
    return this.inorder(this.root);
  }
}

// Example usage:
const bst = new BinarySearchTree();
const arr = [5, 3, 7, 1, 4, 6, 8];
const sortedArr = bst.treeSort(arr);
console.log(sortedArr); // Output: [1, 3, 4, 5, 6, 7, 8]
