function sumOfOddNums(n) {
    let finalSUm = 0;
    for (let i = 1; i <= n * 2; i += 2) {
        console.log(i)
        finalSUm += i;
    }
    console.log(`Sum: ${finalSUm}`)
}

sumOfOddNums(3);