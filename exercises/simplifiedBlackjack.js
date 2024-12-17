function countBustWays() {
  const target = 21;
  const bustThreshold = 22;
  const probabilities = Array(bustThreshold).fill(0);
  probabilities[0] = 1; // Hay una forma de tener un total de 0 (no haber dibujado ninguna carta)

  for (let total = 0; total < target; total++) {
    if (probabilities[total] > 0) {
      for (let card = 1; card <= 10; card++) {
        const newTotal = total + card;
        if (newTotal < bustThreshold) {
          probabilities[newTotal] += probabilities[total];
        }
      }
    }
  }

  // Contar las formas en que el dealer puede bust
  let bustWays = 0;
  for (let total = target + 1; total < bustThreshold; total++) {
    bustWays += probabilities[total];
  }

  return bustWays;
}

// Ejemplo de uso
console.log("Número de formas en que el dealer puede bust:", countBustWays());
