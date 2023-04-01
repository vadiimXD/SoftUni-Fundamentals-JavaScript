function arrayRotation(arr, rotations) {
    let newArr = [];
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            newArr.push(arr[j]);
        }
        newArr.push(firstElement);
        arr = newArr;
        newArr = [];
    }
    console.log(arr.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2);
console.log(`-----------`)
arrayRotation([32, 21, 61, 1], 4);
console.log(`-----------`)
arrayRotation([2, 4, 15, 31], 5);
