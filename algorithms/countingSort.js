function countingSort(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  const count = Array(range).fill(0);
  const output = Array(arr.length).fill(0);

  // Contar la ocurrencia de cada elemento
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Modificar el array count para almacenar la posición de los elementos
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Construir el array de salida
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  // Copiar el array de salida al array original
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }

  return arr;
}

// Ejemplo de uso
const array = [4, 2, 2, 8, 3, 3, 1];
console.log("Array ordenado:", countingSort(array));
