class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }

  bellmanFord(start) {
    const distances = Array(this.vertices).fill(Infinity);
    distances[start] = 0;

    for (let i = 0; i < this.vertices - 1; i++) {
      for (const { source, destination, weight } of this.edges) {
        if (
          distances[source] !== Infinity &&
          distances[source] + weight < distances[destination]
        ) {
          distances[destination] = distances[source] + weight;
        }
      }
    }

    for (const { source, destination, weight } of this.edges) {
      if (
        distances[source] !== Infinity &&
        distances[source] + weight < distances[destination]
      ) {
        console.log("El grafo contiene un ciclo de peso negativo");
        return;
      }
    }

    return distances;
  }
}

// Ejemplo de uso
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

const distances = graph.bellmanFord(0);
console.log("Distancias desde el vértice 0:", distances);
