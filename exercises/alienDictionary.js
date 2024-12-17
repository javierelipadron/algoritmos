function alienOrder(words) {
  const adjList = new Map();
  const inDegree = new Map();

  // Inicializar el grafo y el in-degree
  for (const word of words) {
    for (const char of word) {
      if (!adjList.has(char)) {
        adjList.set(char, new Set());
        inDegree.set(char, 0);
      }
    }
  }

  // Construir el grafo
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLength = Math.min(word1.length, word2.length);

    for (let j = 0; j < minLength; j++) {
      const char1 = word1[j];
      const char2 = word2[j];
      if (char1 !== char2) {
        if (!adjList.get(char1).has(char2)) {
          adjList.get(char1).add(char2);
          inDegree.set(char2, inDegree.get(char2) + 1);
        }
        break;
      }
    }
  }

  // Ordenación topológica
  const queue = [];
  for (const [char, degree] of inDegree.entries()) {
    if (degree === 0) {
      queue.push(char);
    }
  }

  const result = [];
  while (queue.length > 0) {
    const char = queue.shift();
    result.push(char);
    for (const neighbor of adjList.get(char)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Verificar si hay un ciclo
  if (result.length !== inDegree.size) {
    return "";
  }

  return result.join("");
}

// Ejemplo de uso
const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log("Orden de caracteres en el idioma alienígena:", alienOrder(words)); // "wertf"
