// TimSort.js

function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

function merge(arr, l, m, r) {
  let len1 = m - l + 1,
    len2 = r - m;
  let left = new Array(len1);
  let right = new Array(len2);
  for (let x = 0; x < len1; x++) {
    left[x] = arr[l + x];
  }
  for (let x = 0; x < len2; x++) {
    right[x] = arr[m + 1 + x];
  }
  let i = 0;
  let j = 0;
  let k = l;
  while (i < len1 && j < len2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < len1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < len2) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

function timSort(arr, n) {
  const RUN = 32;
  for (let i = 0; i < n; i += RUN) {
    insertionSort(arr, i, Math.min(i + 31, n - 1));
  }
  for (let size = RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      let mid = left + size - 1;
      let right = Math.min(left + 2 * size - 1, n - 1);
      if (mid < right) {
        merge(arr, left, mid, right);
      }
    }
  }
}

// Example usage
let arr = [5, 21, 7, 23, 19];
let n = arr.length;
console.log("Given Array is");
console.log(arr);

timSort(arr, n);

console.log("After Sorting Array is");
console.log(arr);
