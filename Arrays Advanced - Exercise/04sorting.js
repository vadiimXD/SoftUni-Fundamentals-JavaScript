function sort(arr) {
    arr.sort((a, b) => a - b);

    let newArr = [];
    while (arr.length !== 0) {
        newArr.push(arr.pop());
        newArr.push(arr.shift());
    }

    console.log(newArr.join(' '));
}
sort([1, 21, 3, 52, 69,
    63, 31, 2, 18])