const findMedianOfTwoLists = (listA, listB) => {
  console.log("looping");
  console.log(listA, listB);
  const n = listA.length;
  const getAverage = (a, b) => {
    return (a + b) / 2;
  };
  if (n === 1) {
    return getAverage(listA[0], listB[0]);
  }
  if (n === 2) {
    const combined = listA.concat(listB).sort();
    return getAverage(combined[1], combined[2]);
  }
  const mid = Math.floor(n / 2);
  let elemA = listA[mid];
  let elemB = listB[mid];
  if (elemA === elemB) {
    return (elemA + elemB) / 2;
  }
  const adjustedMidForOdd = n % 2 ? mid : mid - 1;
  if (elemA < elemB) {
    return findMedianOfTwoLists(
      listA.slice(adjustedMidForOdd),
      listB.slice(0, mid + 1)
    );
  } else {
    return findMedianOfTwoLists(
      listA.slice(0, mid + 1),
      listB.slice(adjustedMidForOdd)
    );
  }
};

// TESTS ------------------------------>

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

var listA = [1];
var listB = [3];
expect(findMedianOfTwoLists(listA, listB), 2);

listA = [1, 2, 3];
listB = [4, 5, 6];
expect(findMedianOfTwoLists(listA, listB), 3.5);

listA = [1, 5, 9, 100, 101];
listB = [3, 6, 7, 8, 11];
expect(findMedianOfTwoLists(listA, listB), 7.5);

listA = [1, 5, 9, 100];
listB = [3, 6, 7, 8];
expect(findMedianOfTwoLists(listA, listB), 6.5);

listA = [3, 6, 7, 8];
listB = [1, 5, 9, 100];
expect(findMedianOfTwoLists(listA, listB), 6.5);

// const findMedianOfTwoLists = (listA, listB) => {
//   const n = listA.length;
//   const mid = Math.floor(n / 2); // odd
//   let currB = mid;
//   let currA = mid;
//   let prevA = mid;
//   let prevB = mid;

//   const isAtEndOfList = index => {
//     return index === 0 || index === n - 1;
//   };

//   while (true) {
//     console.log("looping");
//     console.log(listA[prevA], listB[prevB]);
//     console.log(listA[currA], listB[currB]);
//     if (listA[currA] === listB[currB] || isAtEndOfList(currA)) {
//       break;
//     }
//     if (listA[currA] > listB[currB]) {
//       if (listA[prevA] < listB[prevB]) {
//         currA = prevA;
//         currB = prevB;
//         break;
//       }
//       prevA = currA;
//       prevB = currB;
//       currA--;
//       currB++;
//     } else {
//       if (listA[prevA] > listB[prevB]) {
//         currA = prevA;
//         currB = prevB;
//         break;
//       }
//       prevA = currA;
//       prevB = currB;
//       currA++;
//       currB--;
//     }
//   }

//   return (listA[currA] + listB[currB]) / 2;
// };
