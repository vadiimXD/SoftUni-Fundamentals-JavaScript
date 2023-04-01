function simpleCalculator(firstNum, secNum, operator) {
    let sum = 0;
    if (operator === "multiply") {
        sum = firstNum * secNum;
    } else if (operator === "divide") {
        sum = firstNum / secNum;
    } else if (operator === "add") {
        sum = firstNum + secNum;
    } else if (operator === "subtract") {
        sum = firstNum - secNum;
    }
    console.log(sum)
}

simpleCalculator(5,
    5,
    'multiply');