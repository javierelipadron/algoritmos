function mostFrequentInteger(arr) {
  const frequencyMap = new Map();
  let maxCount = 0;
  let mostFrequent = null;

  for (const num of arr) {
    const count = (frequencyMap.get(num) || 0) + 1;
    frequencyMap.set(num, count);

    if (count > maxCount) {
      maxCount = count;
      mostFrequent = num;
    }
  }

  return mostFrequent;
}

const arr = [4, 5, 6, 7, 4, 5, 6, 8, 9, 8, 9, 10];
const N = 10;

const mostFrequent = mostFrequentInteger(arr);
console.log("El entero más frecuente es:", mostFrequent);
