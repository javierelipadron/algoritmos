function caseInsensitiveEqual(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase();
}

function editDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

function caseInsensitiveEqualWithEditDistance(s1, s2) {
  if (caseInsensitiveEqual(s1, s2)) {
    return true;
  }
  return editDistance(s1.toLowerCase(), s2.toLowerCase()) <= 1;
}

function caseInsensitiveEqualWithTolerance(s1, s2, n) {
  if (caseInsensitiveEqual(s1, s2)) {
    return true;
  }
  return editDistance(s1.toLowerCase(), s2.toLowerCase()) <= n;
}

// Ejemplo de uso
const s1 = "example";
const s2 = "Example";
const s3 = "exampel";
const s4 = "samples";

console.log(caseInsensitiveEqual(s1, s2)); // true
console.log(caseInsensitiveEqualWithEditDistance(s1, s3)); // true
console.log(caseInsensitiveEqualWithTolerance(s1, s4, 2)); // true
console.log(caseInsensitiveEqualWithTolerance(s1, s4, 1)); // false
