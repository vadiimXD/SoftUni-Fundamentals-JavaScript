function sumEvenNumbers(arr) {
    let num = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        num = Number(arr[i]);

        if (num % 2 === 0) {
            sum +=num
        }
    }
    console.log(sum)
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);