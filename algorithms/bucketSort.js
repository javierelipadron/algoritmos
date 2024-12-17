function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }

  // Determine minimum and maximum values
  let i,
    minValue = arr[0],
    maxValue = arr[0];
  arr.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  // Initialize buckets
  let DEFAULT_BUCKET_SIZE = 5;
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  arr.forEach(function (currentVal) {
    buckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  // Sort buckets and place back into input array
  arr.length = 0;
  buckets.forEach(function (bucket) {
    bucket.sort(function (a, b) {
      return a - b;
    });
    bucket.forEach(function (element) {
      arr.push(element);
    });
  });

  return arr;
}

// Example usage
let array = [42, 32, 33, 52, 37, 47, 51];
console.log("Unsorted array:", array);
let sortedArray = bucketSort(array, 5);
console.log("Sorted array:", sortedArray);
