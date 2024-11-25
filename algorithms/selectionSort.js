function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// Ejemplo de uso
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Array ordenado:", selectionSort(array)); // [11, 12, 22, 25, 34, 64, 90]
