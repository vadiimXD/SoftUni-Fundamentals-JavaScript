function factorialDivision(num, numB) {
    let firstFact = calcFact(num);
    let secondFact = calcFact(numB);


    console.log((firstFact / secondFact).toFixed(2))
    function calcFact(num) {
        let res = 1;
        for (let i = num; i > 1; i -= 2) {
            res *= i * (i - 1)
        }
        return res;
    }


}

factorialDivision(5, 2);