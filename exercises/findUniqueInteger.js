function findUniqueInteger(arr) {
  let unique = 0;

  for (const num of arr) {
    unique ^= num;
  }

  return unique;
}

const arr = [4, 5, 6, 7, 4, 5, 6, 8, 9, 8, 9, 10];
const N = 10;

const uniqueInteger = findUniqueInteger(arr);
console.log("El único entero que aparece una sola vez es:", uniqueInteger);
