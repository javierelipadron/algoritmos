// This algorithm implements the QuickSelect algorithm to find the nth smallest element in an array efficiently.

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

function quickSelect(arr, left, right, k) {
  if (left === right) {
    return arr[left];
  }

  const pivotIndex = partition(arr, left, right);

  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k);
  }
}

function findNthSmallestElement(arr, n) {
  if (n < 1 || n > arr.length) {
    throw new Error("n está fuera del rango del array");
  }
  return quickSelect(arr, 0, arr.length - 1, n - 1);
}

// Ejemplo de uso
const arr = [7, 10, 4, 3, 20, 15];
const n = 3;
const nthSmallest = findNthSmallestElement(arr, n);
console.log(`El ${n}º elemento más pequeño es:`, nthSmallest);
