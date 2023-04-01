function rouding(num, precision) {

    if (precision > 15) {
        precision = 15;
        console.log(Number(num.toFixed(precision)))
    } else {
        console.log(Number(num.toFixed(precision)))
    }
}

rouding(10.5, 3);