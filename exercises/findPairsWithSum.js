function findPairsWithSum(arr, N) {
  const pairs = [];
  const seen = new Set();

  for (const num of arr) {
    const complement = N - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}

const N = 10;

const pairs = findPairsWithSum(arr, N);
console.log(`Pares que suman a ${N}:`, pairs);
