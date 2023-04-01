function palindromeIntegers(arr) {
    let forwardNum = 0;
    let backwardNum = 0;
    let buff = ""
    for (let i = 0; i < arr.length; i++) {
        forwardNum = arr[i];
        forwardNum = forwardNum.toString()
        buff = "";
        for (let j = forwardNum.length - 1; j >= 0; j--) {
            backwardNum = forwardNum[j]
            buff += backwardNum;

        }
        if (buff == forwardNum) {
            console.log('true')
        } else {
            console.log('false')
        }
    }

}

palindromeIntegers([32, 2, 232, 1010]);