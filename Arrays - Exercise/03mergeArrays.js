function mergeArrays(firstArr, secondArr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < firstArr.length; i++) {
        let firstElement = firstArr[i];
        let secondElemnt = secondArr[i];
        if (i % 2 === 0) {
            firstElement = Number(firstArr[i]);
            secondElemnt = Number(secondArr[i]);
        }
        sum = firstElement + secondElemnt;
        newArr.push(sum)
    }
    console.log(newArr.join(" - "))
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
console.log(`----------------------------`)
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);