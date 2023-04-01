function calculator(a, operator, b) {
    let sum = 0;

    if (operator === "+") {
        sum = a + b;
    } else if (operator === '-') {
        sum = a - b;
    } else if (operator === "*") {
        sum = a * b;
    } else if (operator === "/") {
        sum = a / b;
    }
    console.log(sum.toFixed(2))
}

calculator(25.5,
    '-',
    3)