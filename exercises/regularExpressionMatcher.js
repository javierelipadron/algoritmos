function isMatch(s, p) {
  const dp = Array.from({ length: s.length + 1 }, () =>
    Array(p.length + 1).fill(false)
  );
  dp[0][0] = true;

  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }

  return dp[s.length][p.length];
}

// Ejemplo de uso
const s1 = "aab";
const p1 = "c*a*b";
console.log(isMatch(s1, p1)); // true

const s2 = "mississippi";
const p2 = "mis*is*p*.";
console.log(isMatch(s2, p2)); // false

const s3 = "ab";
const p3 = ".*";
console.log(isMatch(s3, p3)); // true
