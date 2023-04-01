function maxNumber(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let boolean = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                boolean = false;
                break;
            }
        }

        if (boolean) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join(' '));
}
maxNumber([1, 4, 3, 2]);
console.log(`---------------------`)
maxNumber([14, 24, 3, 19, 15, 17]);
console.log(`---------------------`)
maxNumber([41, 41, 34, 20]);
console.log(`---------------------`)
maxNumber([27, 19, 42, 2, 13, 45, 48]);
