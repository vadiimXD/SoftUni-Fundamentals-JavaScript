function addAndSubstract(firstNum, secNum, thirdNum) {
    let log = 0;
    let sum = sumOfTwoNumber(firstNum, secNum);
    let substract = substractOfSumAndLastNum(sum, thirdNum);

    function sumOfTwoNumber(a, b) {
        return a + b;
    }

    function substractOfSumAndLastNum(sum, c) {
        log = sum - c;
        return log;
    }

    console.log(log)
    
}

addAndSubstract(23,
    6,
    10);