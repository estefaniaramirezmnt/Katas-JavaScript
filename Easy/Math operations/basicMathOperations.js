// The function should take three arguments - operation(string/char), value1(number), value2(number).
// And should return result of numbers after applying the chosen operation.
// ('+', 4, 7) --> 11

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

function basicOp2(operation, value1, value2) {
    return eval(operation+value1+value2);
  }

basicOp2('+', 5, 10); // 15
// eval('+'+5+10) -> eval('+510') -> 5+10 -> 15
// eval() function evaluates JavaScript code represented as a string