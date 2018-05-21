const recursiveMultiply = (a, b) => {
  let smaller = a >= b ? b : a;
  let bigger = a >= b ? a : b;

  const recurse = (bigger, smaller) => {
    if (smaller === 2) {
      return bigger + bigger;
    } else if (smaller === 1) {
      return bigger;
    } else if (smaller === 0) {
      return 0;
    } else {
      return (
        recursiveMultiply(bigger, smaller % 2) +
        recursiveMultiply(bigger + bigger, Math.floor(smaller / 2))
      );
    }
  };

  return recurse(bigger, smaller);
};

// TESTS -----------------------

console.log(recursiveMultiply(1, 0)); // 0
console.log(recursiveMultiply(1, 1)); // 1
console.log(recursiveMultiply(1, 2)); // 2
console.log(recursiveMultiply(1, 3)); // 3
console.log(recursiveMultiply(1, 4)); // 4
console.log(recursiveMultiply(2, 5)); // 10
console.log(recursiveMultiply(7, 9)); // 63
console.log(recursiveMultiply(8, 10)); // 80
console.log(recursiveMultiply(11, 6)); // 66
