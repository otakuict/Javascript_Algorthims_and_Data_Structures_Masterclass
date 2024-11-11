function countUniqueValues(array = []) {
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      array[++i] = array[j];
    }
  }

  return i + 1;
}

console.log(
  "🚀 ~ file: unique_values.js:13 ~ countUniqueValues:",

  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
);
