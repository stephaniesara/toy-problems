// fibonacci using dynamic programming - store the last two fib calculations
const fib = n => {
  let prev = [0, 1];
  if (n < 2) {
    return prev[n];
  }
  let curr;
  for (let i = 2; i <= n; i++) {
    curr = prev[0] + prev[1];
    prev[0] = prev[1];
    prev[1] = curr;
  }
  return curr;
};

// TESTS -------------------------------

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let input = 1;
let output = 1;
expect(fib(input), output);

input = 4;
output = 3;
expect(fib(input), output);

input = 5;
output = 5;
expect(fib(input), output);

input = 10;
output = 55;
expect(fib(input), output);

input = 15;
output = 610;
expect(fib(input), output);
