function evenAndOddSubtaction(arr) {
    let nums = 0;
    let oddNums = 0;
    let evenNums = 0;
    for (let i = 0; i < arr.length; i++) {
        nums = Number(arr[i])

        if (nums % 2 === 0) {
            evenNums += nums
        } else {
            oddNums += nums;
        }
    }
    console.log(evenNums - oddNums)
}

evenAndOddSubtaction([2, 4, 6, 8, 10]);