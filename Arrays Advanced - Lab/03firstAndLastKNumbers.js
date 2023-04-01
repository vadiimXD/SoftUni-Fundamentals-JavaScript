function firstLadKNumbers(arr) {
    let startElement = arr[0];

    console.log(arr.slice(1, startElement + 1)
        .join(` `));
    console.log(arr.slice(arr.length - startElement, arr.length)
        .join(" "))
}

firstLadKNumbers([2,
    7, 8, 9]);

firstLadKNumbers([3,
    6, 7, 8, 9]);