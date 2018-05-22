// 5.21.18 pre-interview interview with Zack Reynolds

const sumDigits = str => {
  let sum = 0;
  str.split("").forEach((char, index) => {
    sum += index % 2 ? Number(char) : 3 * Number(char);
  });
  return sum;
};

// input: Str
// output: Str
const normalizeUPC = input => {
  let sum = sumDigits(input);
  if (input.length === 12) {
    if (sum % 10) {
      throw "error";
    } else {
      return input;
    }
  } else if (input.length === 11) {
    // length is 11
    // ex: sum = 96
    // checkDigit: 10 - (sum % 10)

    if (sum % 10) {
      let checkDigit = 10 - sum % 10;
      return input + String(checkDigit);
    } else {
      return input + "0";
    }
  } else {
    // error
    throw "error";
  }
};

// TESTS ------------------------

console.log(normalizeUPC("017817746847")); // '017817746847'
console.log(normalizeUPC("01781774684")); // '017817746847'
console.log(normalizeUPC("01781770214")); // '017817702140'
console.log(Number("01781770214"));
