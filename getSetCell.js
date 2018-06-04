function setCell(cell, value) {
  values[cell] = value;
}

// return the value of the cell
function getCell(cell) {
  let value = values[cell];
  return checkValue(value);
}

let values = {};

function parseValue(str) {
  let elements = str.substr(1).split("+");
  return elements.reduce((accum, curr) => {
    if (isNaN(parseInt(curr))) {
      return accum + getCell(curr);
    } else {
      return accum + Number(curr);
    }
  }, 0);
}

const checkValue = str => {
  if (str[0] === "=") {
    return parseValue(str);
  } else if (isNaN(parseInt(str))) {
    return NaN;
  } else {
    return parseInt(str);
  }
};

// TESTS ---------------------

setCell("A1", 5);
log(getCell("A1")); // 5
setCell("B1", 10);

setCell("C1", "=A1+B1");
// value: ['A1', 'B1']
// '=A1+B1'

log(getCell("C1")); // == 15
setCell("A1", 20);
log(getCell("C1")); // == 30

// c1 === '=A1+B1', A1=A2+A3, A2=A4+A5

// '123', '=23+23', 'asdf'

// OTHER -----------------------

//parseInt('5') === Number('5') // t
// parseInt('dsk') === Number('dsk') // f

// eval(document.querySelector('input').value);
// eval('5 * 10 * 15');

// function log(str) {
// 	document.querySelector('#output').innerHTML += ("<br>" + str);
// }

// log('testaaaa');

//'=5+10' = 15
//'=A1+B1+C1' =

// change data structure if we need to optimize reads (slower writes)
/* 'C1': {
  value: 15,
  formula: '=A1+B1',
  dependencies: [],
  isDirty: false
}

'A1': {
  value: 5,
  formula: null,
  dependencies: ['C1'],
  isDirty: false
} */
