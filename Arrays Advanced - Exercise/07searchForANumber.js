function searchForANumber(firstArr, secArr) {
    let elementsNeedToGet = secArr[0];
    let elementsNeedToDelete = secArr[1];
    let searchingNum = secArr[2];
    let newArr = [];
    let numCounter = 0;
    for (let i = 0; i < elementsNeedToGet; i++) {
        newArr.push(firstArr[i])
    }

    for (let j = 0; j < elementsNeedToDelete; j++) {
        newArr.shift();
    }

    for (let x = 0; x < newArr.length; x++) {
        let num = newArr[x];

        if (num === searchingNum) {
            numCounter++;
        }
    }


    console.log(`Number ${searchingNum} occurs ${numCounter} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])