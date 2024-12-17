class CartesianTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class CartesianTree {
  constructor() {
    this.root = null;
  }

  buildTree(arr) {
    if (arr.length === 0) return null;

    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      let node = new CartesianTreeNode(arr[i]);
      let last = null;

      while (stack.length && stack[stack.length - 1].value > node.value) {
        last = stack.pop();
      }

      if (stack.length) {
        stack[stack.length - 1].right = node;
      }

      node.left = last;
      stack.push(node);
    }

    this.root = stack[0];
  }

  inorderTraversal(node, result = []) {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}

// Example usage:
const arr = [3, 2, 6, 1, 9];
const cartesianTree = new CartesianTree();
cartesianTree.buildTree(arr);

console.log(
  "Inorder Traversal of Cartesian Tree:",
  cartesianTree.inorderTraversal(cartesianTree.root)
);
