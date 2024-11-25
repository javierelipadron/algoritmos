function hasInterestingTriplet(arr) {
  const n = arr.length;
  if (n < 3) return false;

  let min = arr[0];
  const secondMin = new Array(n).fill(Infinity);

  for (let j = 1; j < n; j++) {
    if (arr[j] > min) {
      secondMin[j] = Math.min(secondMin[j - 1], arr[j]);
    } else {
      secondMin[j] = secondMin[j - 1];
      min = arr[j];
    }
  }

  for (let k = n - 1; k >= 2; k--) {
    if (arr[k] > secondMin[k - 1]) {
      console.log(
        "Triplete interesante encontrado:",
        min,
        secondMin[k - 1],
        arr[k]
      );
      return true;
    }
  }

  return false;
}

// Ejemplo de uso
const arr = [11, 5, 113, 120, 1110];
const result = hasInterestingTriplet(arr);
console.log("¿El array tiene al menos un triplete interesante?", result);
