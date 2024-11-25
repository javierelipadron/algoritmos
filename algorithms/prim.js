class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(key, value) {
    this.heap.push({ key, value });
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent.value <= element.value) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.value < element.value) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.value < element.value) ||
          (swap !== null && rightChild.value < leftChild.value)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  prim(start) {
    const minHeap = new MinHeap();
    const result = [];
    const visited = new Set();
    let totalWeight = 0;

    minHeap.insert(start, 0);

    while (!minHeap.isEmpty()) {
      const { key: currentVertex, value: currentWeight } = minHeap.extractMin();

      if (visited.has(currentVertex)) continue;
      visited.add(currentVertex);
      totalWeight += currentWeight;

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited.has(neighbor.node)) {
          minHeap.insert(neighbor.node, neighbor.weight);
        }
      });

      if (currentWeight !== 0) {
        result.push({ vertex: currentVertex, weight: currentWeight });
      }
    }

    return { totalWeight, result };
  }
}

// Ejemplo de uso
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 2);
graph.addEdge("A", "C", 3);
graph.addEdge("B", "D", 3);
graph.addEdge("B", "E", 4);
graph.addEdge("C", "F", 5);
graph.addEdge("D", "E", 1);
graph.addEdge("E", "F", 2);

const { totalWeight, result } = graph.prim("A");
console.log("Peso total del MST:", totalWeight);
console.log("Aristas en el MST:", result);
