function cubeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const cubes = arr.map((num) => Math.pow(num, 3));
  cubes.sort((a, b) => a - b);
  return cubes.map((cube) => Math.cbrt(cube));
}

// Example usage
const array = [4, 1, 3, 2];
const sortedArray = cubeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4]
