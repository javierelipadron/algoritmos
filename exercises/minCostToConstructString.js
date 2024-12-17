// Parte 1: Costo Mínimo para Construir una Cadena
function minCostToConstructString(cost) {
  const n = cost.length;
  const dp = Array.from({ length: n }, () => Array(4).fill(Infinity));

  // Inicializar el primer carácter
  for (let j = 0; j < 4; j++) {
    dp[0][j] = cost[0][j];
  }

  // Llenar la tabla dp
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + cost[i][j]);
        }
      }
    }
  }

  // Encontrar el costo mínimo en la última posición
  return Math.min(...dp[n - 1]);
}

// Parte 2: Número Mínimo de Operaciones para Ordenar el Array
function minOperationsToSortArray(arr) {
  const n = arr.length;
  const lis = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }

  const maxLis = Math.max(...lis);
  return n - maxLis;
}

// Ejemplo de uso para Parte 1
const cost = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7]
];
console.log("Costo mínimo para construir la cadena:", minCostToConstructString(cost)); // 10

// Ejemplo de uso para Parte 2
const arr = [3, 1, 2, 4];
console.log("Número mínimo de operaciones para ordenar el array:", minOperationsToSortArray(arr)); // 2