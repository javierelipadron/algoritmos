function longestCommonSubsequence(X, Y) {
  const m = X.length;
  const n = Y.length;
  const L = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X[i - 1] === Y[j - 1]) {
        L[i][j] = L[i - 1][j - 1] + 1;
      } else {
        L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
      }
    }
  }

  let index = L[m][n];
  let lcs = Array(index).fill("");
  let i = m,
    j = n;

  while (i > 0 && j > 0) {
    if (X[i - 1] === Y[j - 1]) {
      lcs[index - 1] = X[i - 1];
      i--;
      j--;
      index--;
    } else if (L[i - 1][j] > L[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs.join("");
}

// Ejemplo de uso
const X = "AGGTAB";
const Y = "GXTXAYB";
const lcs = longestCommonSubsequence(X, Y);
console.log("La subcadena común más larga es:", lcs);
