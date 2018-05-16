const squareRoot = n => {
  let upperBound = n;
  let guess = n / 2;
  let lowerBound = 0;
  const err = 0.00000000000001;
  while (true) {
    let product = guess * guess;
    if (product >= n - err && product <= n + err) {
      return guess;
    } else if (product < n) {
      lowerBound = guess;
    } else {
      upperBound = guess;
    }
    // let previousGuess = guess;
    guess = (lowerBound + upperBound) / 2;
    // if (previousGuess === guess) {
    //   return guess;
    // }
  }
};

console.log(squareRoot(0));
console.log(squareRoot(4));
console.log(squareRoot(8));
console.log(squareRoot(25));
console.log(squareRoot(10000));
