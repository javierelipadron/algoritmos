function matrixChainOrder(p) {
  const n = p.length - 1;
  const m = Array.from({ length: n }, () => Array(n).fill(0));
  const s = Array.from({ length: n }, () => Array(n).fill(0));

  for (let l = 2; l <= n; l++) {
    for (let i = 0; i < n - l + 1; i++) {
      const j = i + l - 1;
      m[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        const q = m[i][k] + m[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
        if (q < m[i][j]) {
          m[i][j] = q;
          s[i][j] = k;
        }
      }
    }
  }

  return { m, s };
}

function printOptimalParens(s, i, j) {
  if (i === j) {
    return `A${i + 1}`;
  } else {
    return `(${printOptimalParens(s, i, s[i][j])} x ${printOptimalParens(
      s,
      s[i][j] + 1,
      j
    )})`;
  }
}

// Ejemplo de uso
const p = [30, 35, 15, 5, 10, 20, 25];
const { m, s } = matrixChainOrder(p);
console.log("Matriz de costos mínimos:", m);
console.log("Matriz de divisiones óptimas:", s);
console.log("Paréntesis óptimos:", printOptimalParens(s, 0, p.length - 2));
