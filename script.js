
let digits = ["", ""];
let operator = "";
let total = "";

function writeNumber(numero) {
  if (!operator) {
    digits[0] += numero;
  } else {
    digits[1] += numero;
  }
  document.getElementById("space").innerHTML = `
    ${digits[0]} ${operator}  ${digits[1]}
    `;
}

function writeOperator(op) {
  operator = op;
  document.getElementById("space").innerHTML = `
    ${digits[0]} ${operator}  ${digits[1]}
    `;
}

function calculate() {
  if (operator == "+") {
    total = parseInt(digits[0]) + parseInt(digits[1]);
    document.getElementById("space").innerHTML = `
        ${total}
    `;
  }
  if (operator == "*") {
    total = parseInt(digits[0]) * parseInt(digits[1]);
    document.getElementById("space").innerHTML = `
        ${total}
    `;
  }
  if (operator == "-") {
    total = parseInt(digits[0]) - parseInt(digits[1]);
    document.getElementById("space").innerHTML = `
        ${total}
    `;
  }
  if (operator == "/") {
    total = parseInt(digits[0]) / parseInt(digits[1]);
    document.getElementById("space").innerHTML = `
        ${total}
    `;
  }
  operator = '';
  digits = ["",""]
}

function remove() {
    operator = '';
    digits = ["",""]
    total= ""
    document.getElementById("space").innerHTML = ""
}
