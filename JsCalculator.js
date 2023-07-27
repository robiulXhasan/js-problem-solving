function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator. Please use +, -, *, or /.";
  }
}

const result = calculate(15, "/", 5);
console.log(result);
