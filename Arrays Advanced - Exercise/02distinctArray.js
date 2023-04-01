function distinctArray(arr) {

    arr = arr.filter((x, i, a) => a.indexOf(x) === i);

    console.log(arr.join(' '));
}

distinctArray();