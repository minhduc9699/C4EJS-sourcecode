// khai bao ham

function calc(op, number1, number2) { // parameter
  let result = 0
  if (op == '+') {
    result = number1 + number2
  } else if (op == '-') {
    result = number1 - number2
  } else if (op == '*') {
    result = number1 * number2
  } else if (op == '/') {
    result = number1 / number2
  }
  return result
  
}
// goi ham