function shellSort(arr) {
  let n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}

// Ejemplo de uso
const array = [12, 34, 54, 2, 3];
console.log("Array ordenado:", shellSort(array));
