class Node {
  constructor(point, axis) {
    this.point = point;
    this.left = null;
    this.right = null;
    this.axis = axis;
  }
}

class KDTree {
  constructor(points, depth = 0) {
    const k = points[0].length;
    const axis = depth % k;

    if (points.length === 0) {
      this.root = null;
    } else {
      points.sort((a, b) => a[axis] - b[axis]);
      const median = Math.floor(points.length / 2);

      this.root = new Node(points[median], axis);
      this.root.left = new KDTree(points.slice(0, median), depth + 1).root;
      this.root.right = new KDTree(points.slice(median + 1), depth + 1).root;
    }
  }

  insert(point, node = this.root, depth = 0) {
    if (node === null) {
      const axis = depth % point.length;
      return new Node(point, axis);
    }

    const axis = node.axis;
    if (point[axis] < node.point[axis]) {
      node.left = this.insert(point, node.left, depth + 1);
    } else {
      node.right = this.insert(point, node.right, depth + 1);
    }

    return node;
  }

  nearest(point, node = this.root, depth = 0, best = null) {
    if (node === null) {
      return best;
    }

    const axis = node.axis;
    const nextBest =
      best === null ||
      this.distance(point, node.point) < this.distance(point, best.point)
        ? node
        : best;
    const nextNode = point[axis] < node.point[axis] ? node.left : node.right;

    return this.nearest(point, nextNode, depth + 1, nextBest);
  }

  distance(point1, point2) {
    return Math.sqrt(
      point1.reduce(
        (sum, value, index) => sum + Math.pow(value - point2[index], 2),
        0
      )
    );
  }
}

// Example usage:
const points = [
  [2, 3],
  [5, 4],
  [9, 6],
  [4, 7],
  [8, 1],
  [7, 2],
];

const kdTree = new KDTree(points);
console.log("KD Tree:", kdTree);

const newPoint = [6, 3];
kdTree.insert(newPoint);
console.log("KD Tree after insertion:", kdTree);

const nearestPoint = kdTree.nearest([9, 2]);
console.log("Nearest point to [9, 2]:", nearestPoint.point);
