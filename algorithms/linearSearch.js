function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Elemento no encontrado
}

// Ejemplo de uso
const array = [34, 7, 23, 32, 5, 62];
const target = 23;
const result = linearSearch(array, target);
console.log(
  result !== -1
    ? `Elemento encontrado en el índice ${result}`
    : "Elemento no encontrado"
);
