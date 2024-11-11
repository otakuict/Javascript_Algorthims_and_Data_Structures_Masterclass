function countUniqueValues(array = []) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let new_arr = [];
  if (array.length > 0) {
    new_arr.push(array[0]);
  }

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      array[++i] = array[j];
      new_arr.push(array[j]);
    }
  }

  return new_arr.length;
}

console.log(
  "🚀 ~ file: unique_values.js:13 ~ countUniqueValues:",

  countUniqueValues([-2, -1, -1, 0, 1])
);
