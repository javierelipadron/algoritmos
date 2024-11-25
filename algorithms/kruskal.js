class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

function kruskal(vertices, edges) {
  const mst = [];
  const disjointSet = new DisjointSet(vertices);

  edges.sort((a, b) => a[2] - b[2]);

  for (const [u, v, weight] of edges) {
    if (disjointSet.find(u) !== disjointSet.find(v)) {
      disjointSet.union(u, v);
      mst.push([u, v, weight]);
    }
  }

  return mst;
}

// Ejemplo de uso
const vertices = 6;
const edges = [
  [0, 1, 4],
  [0, 2, 4],
  [1, 2, 2],
  [1, 0, 4],
  [2, 0, 4],
  [2, 1, 2],
  [2, 3, 3],
  [2, 5, 2],
  [2, 4, 4],
  [3, 2, 3],
  [3, 4, 3],
  [4, 2, 4],
  [4, 3, 3],
  [5, 2, 2],
  [5, 4, 3],
];

console.log("Árbol de expansión mínima:", kruskal(vertices, edges));
