function heapSort(arr) {
  let n = arr.length;

  // Construir el heap (reorganizar el array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extraer elementos del heap uno por uno
  for (let i = n - 1; i > 0; i--) {
    // Mover la raíz actual al final
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Llamar a heapify en el heap reducido
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i; // Inicializar el más grande como raíz
  let left = 2 * i + 1; // izquierda = 2*i + 1
  let right = 2 * i + 2; // derecha = 2*i + 2

  // Si el hijo izquierdo es más grande que la raíz
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Si el hijo derecho es más grande que el más grande hasta ahora
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // Si el más grande no es la raíz
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursivamente heapify el subárbol afectado
    heapify(arr, n, largest);
  }
}

// Ejemplo de uso
const array = [12, 11, 13, 5, 6, 7];
console.log("Array ordenado:", heapSort(array));
