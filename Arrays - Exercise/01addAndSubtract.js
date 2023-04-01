function addAndSubtract(arr) {
    let newArr = [];
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        oldSum += num;

        if (num % 2 === 0) {
            num += i;
        } else {
            num -= i;
        }
        newSum += num;
        newArr.push(num)

    }
    console.log(newArr)
    console.log(oldSum)
    console.log(newSum)
}

addAndSubtract([5, 15, 23, 56, 35])