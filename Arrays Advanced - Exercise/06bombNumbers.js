function bombNumbers(firstArr, secondArr) {
    let specialNumber = secondArr[0]
    let power = secondArr[1]
    let sum = 0;
    for (let i = 0; i < firstArr.length; i++) {
        let element = firstArr[i]
        if (element === specialNumber) {
            firstArr.splice(i, 1)
            if (i === 0) {
                firstArr.splice(i, power)
            } else {

                firstArr.splice(i, power) // remove last elements
                firstArr.splice(i - power, power) //remove starts elements
            }
        }
    }

    for (let j = 0; j < firstArr.length; j++) {
        sum += Number(firstArr[j])
    }
    console.log(sum)
    // console.log(firstArr)
}

bombNumbers([3, 4, 5, 2, 4, 2, 9, 1], [4, 2])
// console.log(`--------------`)
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
// console.log(`--------------`)
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
// console.log(`--------------`)
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])

