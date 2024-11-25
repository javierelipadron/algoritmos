function floydWarshall(graph) {
  const dist = [];
  const V = graph.length;

  // Inicializar la matriz de distancias con los valores del grafo
  for (let i = 0; i < V; i++) {
    dist[i] = [];
    for (let j = 0; j < V; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (graph[i][j] !== 0) {
        dist[i][j] = graph[i][j];
      } else {
        dist[i][j] = Infinity;
      }
    }
  }

  // Aplicar el algoritmo de Floyd-Warshall
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// Ejemplo de uso
const graph = [
  [0, 3, Infinity, 5],
  [2, 0, Infinity, 4],
  [Infinity, 1, 0, Infinity],
  [Infinity, Infinity, 2, 0],
];

console.log("Matriz de distancias más cortas:");
console.table(floydWarshall(graph));
