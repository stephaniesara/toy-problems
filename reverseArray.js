// input - array of values
// output - reversed array
// constraints - optimize for space
// edge cases - none

// [] -> []
// [1, 2] -> [2, 1]
// [1, 2, 3] -> [3, 2, 1]

const reverseArray = arr => {
  let len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    let temp = arr[len - 1 - i];
    arr[len - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

// console.log(reverseArray([]));
// console.log(reverseArray([1, 2]));
// console.log(reverseArray([1, 2, 3]));
