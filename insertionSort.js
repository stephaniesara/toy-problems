const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let x = arr[i];
    let compareInd = i - 1;
    while (x < arr[compareInd] && compareInd >= 0) {
      arr[compareInd + 1] = arr[compareInd];
      compareInd--;
    }
    arr[compareInd + 1] = x;
  }
  return arr;
};

var expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

var arr = [2, 1, 3];
console.log("result", arr.slice(), "->", insertionSort(arr));
arr = [1, 2, 3];
console.log("result", arr.slice(), "->", insertionSort(arr));
arr = [4, 3, 2, 1];
console.log("result", arr.slice(), "->", insertionSort(arr));
arr = [1, 5, 9, 4, 7, 2, 3];
console.log("result", arr.slice(), "->", insertionSort(arr));
