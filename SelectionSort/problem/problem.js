function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

function selectionSort(arr, strComp) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (typeof arr[j] === "number") {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      } else if (typeof arr[j] === "object") {
        if (arr[lowest].age < arr[j].age) {
          // DESC ,  use more than if ASC
          lowest = j;
        }
      } else {
        if (strComp(arr[lowest], arr[j]) === 1) {
          lowest = j;
        }
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
console.log("🚀 ~ selectionSort:", selectionSort(kitties, strComp));

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

console.log(selectionSort(moarKittyData)); // DESC
