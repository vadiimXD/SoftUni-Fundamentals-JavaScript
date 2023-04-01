function negativeOrPositiveNums(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);

        if (element < 0) {
            newArr.unshift(element)
        } else {
            newArr.push(element)

        }
    }
    console.log(newArr.join("\n"))
}

negativeOrPositiveNums(['3', '-2', '0', '-1']);