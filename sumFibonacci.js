// write a function that returns the sum of all Fibonacci numbers from 0 to n inclusive
const sumFibonacci = n => {
  let memo = {};
  // let count = 0;
  const fib = n => {
    // count++;
    if (n <= 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    const first = memo[n - 1] || fib(n - 1);
    const second = memo[n - 2] || fib(n - 2);
    return first + second;
  };

  let sum = 0;
  for (var i = 1; i <= n; i++) {
    memo[i] = fib(i);
    sum += memo[i];
  }
  // console.log(count);
  return sum;
};

// TESTS -----------------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let input = 1;
let output = 1;
expect(sumFibonacci(input), output);

input = 2;
output = 2;
expect(sumFibonacci(input), output);

input = 3;
output = 4;
expect(sumFibonacci(input), output);

input = 4;
output = 7;
expect(sumFibonacci(input), output);

input = 5;
output = 12;
expect(sumFibonacci(input), output);

input = 6;
output = 20;
expect(sumFibonacci(input), output);

// naive solution
// const sumFibonacci = n => {
//   let count = 0;
//   const fib = n => {
//     count++;
//     if (n <= 0) {
//       return 0;
//     }
//     if (n === 1) {
//       return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
//   };

//   let sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += fib(i);
//   }
//   console.log(count);
//   return sum;
// };
