function perfectNumber(num) {
    let sum = 0;
    
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    let result = sum === num ? "We have a perfect number!" : "It's not so perfect."

    console.log(result)

}

perfectNumber(6);