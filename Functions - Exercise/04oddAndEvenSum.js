function evenOddSum(num) {
    let string = numToString(num)
    let odd = 0;
    let even = 0;
    let digit = 0;
    function numToString(num) {
        return num = num.toString();
    }

    for (let i = 0; i < string.length; i++) {
        digit = Number(string[i]);
        if (digit % 2 === 0) {
            even += digit;
        } else {
            odd += digit
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

evenOddSum(1000435);