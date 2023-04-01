function sumDigits(num) {
    let numToString = num.toString();
    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
        let number = Number(numToString[i]);
        sum += number;
    }
    console.log(sum);
}

sumDigits(543);