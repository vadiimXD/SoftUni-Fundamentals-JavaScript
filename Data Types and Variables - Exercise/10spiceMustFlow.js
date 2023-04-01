function spiceMustFlow(n) {
    let dayCounter = 0;
    let totalAmount = 0;
    let middleAmount = 0;

    while (n > 100) {
        middleAmount = n - 26
        n -= 10;
        totalAmount += middleAmount
        dayCounter++;
    }
    console.log(dayCounter);
    console.log(totalAmount -= 26);

}

spiceMustFlow(111)