const isPrime = n => {
  for (let divisor = 2; divisor <= Math.sqrt(n); divisor++) {
    if (n % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getNPrime = n => {
  // countOfPrimes: 0
  // num: 2 (or 1)
  // loop through, incrementing num by 1
  // if num is prime -> count++ // helper isPrime
  // if count = n -> return num

  let countOfPrimes = 0;
  let num = 2;
  while (true) {
    //
    if (isPrime(num)) {
      countOfPrimes++;
    }
    if (countOfPrimes === n) {
      return num;
    }
    num++;
  }
};

// TESTS -----------------------

// console.log(isPrime(2)); // true
// console.log(isPrime(3)); // true
// console.log(isPrime(20)); // false
// console.log(isPrime(23)); // true

console.log(getNPrime(1)); // 2
console.log(getNPrime(2)); // 3
console.log(getNPrime(3)); // 5
console.log(getNPrime(100)); // 541
