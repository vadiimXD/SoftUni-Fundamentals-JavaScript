function reverseAnArrayOfNumbers(num, array) {
    let newArray = [];
    for (let i = num - 1; i >= 0; i--) {
        let element = array[i];
        newArray.push(element);
    }
    console.log(newArray.join(" "))

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);