function magicSum(arr, num) {
    let firstNum = 0;
    let secondNum = 0;
    let string = "";
    for (let i = 0; i < arr.length ; i++) {
        firstNum = Number(arr[i]);
        for (let j = i + 1; j < arr.length ; j++) {
            secondNum = Number(arr[j]);

            if (secondNum + firstNum === num) {
       console.log(`${firstNum} ${secondNum} `)
            }
        }
    }
    
}
magicSum([1, 7, 6, 2, 19, 23],
    8);
