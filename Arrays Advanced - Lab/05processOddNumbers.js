function processOddNumbers(arr) {
    let sum = 0;
    let element = 0;
    let newArr = []
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            element = arr[i]
            element *= 2
            newArr.unshift(element)
        }
    }
    console.log(newArr.join(' '))
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);