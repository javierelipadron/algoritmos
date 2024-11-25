function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (const el of arr.slice(0, arr.length - 1)) {
    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Ejemplo de uso
const array = [34, 7, 23, 32, 5, 62];
console.log("Array ordenado:", quickSort(array));
