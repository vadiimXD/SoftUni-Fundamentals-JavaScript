function sumFirstAndLastArrayElements(array) {
    let firstNum = Number(array[0]);
    let last = Number(array[array.length - 1])
    console.log(firstNum + last)
}

sumFirstAndLastArrayElements([20, 30, 40]);