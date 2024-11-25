function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(
      `left: ${left}, mid: ${mid}, right: ${right}, arr[mid]: ${arr[mid]}`
    );

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Elemento no encontrado
}

// Ejemplo de uso
const array = [2, 3, 4, 10, 40];
const target = 10;
console.log("Arreglo inicial:", array);
const result = binarySearch(array, target);
console.log(
  result !== -1
    ? `Elemento encontrado en el índice ${result}`
    : "Elemento no encontrado"
);
