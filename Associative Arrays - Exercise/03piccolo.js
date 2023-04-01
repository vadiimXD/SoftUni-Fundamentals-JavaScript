function piccolo(input) {
    let parking = new Set()

    for (const carData of input) {
        let [direction, carNumber] = carData.split(", ")

        if (direction === "IN") {
            parking.add(carNumber, "")
        } else {
            parking.delete(carNumber)
        }
    }
    let sort = Array.from(parking).sort((a, b) => a.localeCompare(b))


    if (parking.size === 0) {
        console.log("Parking Lot is Empty")
    } else {
        for (const carNumber of sort) {
            console.log(carNumber)
        }
    }
}

piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU']);