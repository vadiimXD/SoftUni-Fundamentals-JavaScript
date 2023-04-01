function vacation(group, type, day) {
    let price = 0;
    let secondPrice = 0;
    if (type === "Students") {
        if (day === "Friday") {
            price = 8.45 * group;
        } else if (day === "Saturday") {
            price = 9.80 * group;
        } else if (day === "Sunday") {
            price = 10.46 * group;
        }
        if (group >= 30) {
            price *= 0.85;
        }
    } else if (type === "Business") {
        if (day === "Friday") {
            price = 10.90 * group;
            secondPrice = 10.90;
        } else if (day === "Saturday") {
            price = 15.60 * group;
            secondPrice = 15.60;
        } else if (day === "Sunday") {
            price = 16 * group;
            secondPrice = 16;
        }
        if (group >= 100) {
            price -= 10 * secondPrice
        }
    } else if (type === "Regular") {
        if (day === "Friday") {
            price = 15 * group;
        } else if (day === "Saturday") {
            price = 20 * group;
        } else if (day === "Sunday") {
            price = 22.50 * group;
        }
        if (group >= 10 && group <= 20) {
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}

vacation(100,
    "Business",
    "Saturday")