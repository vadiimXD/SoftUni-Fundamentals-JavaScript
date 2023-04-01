function orders(product, bought) {
    let price = 0;
    if (product === "coffee") {
        coffeePrice(bought);
    } else if (product === "water") {
        waterPrice(bought);
    } else if (product === "coke") {
        cokePrice(bought);
    } else {
        snackPrice(bought);
    }

    function coffeePrice(quantity) {
        price = quantity * 1.50;
        return price;
    }

    function waterPrice(quantity) {
        price = quantity * 1.00;
        return price;
    }

    function cokePrice(quantity) {
        price = quantity * 1.40;
        return price;
    }

    function snackPrice(quantity) {
        price = quantity * 2.00;
        return price;
    }

    console.log(price.toFixed(2));
}
orders("water", 5);

/* OTHER SOLUTION WITHOUT FUNCTIONS

function orders(product, bought) {
    water = 1.00;
    coffee = 1.50;
    coke = 1.40;
    snacks = 2.00;
    let finalPrice = 0;
    // let calc= calculator(product, bought)
    if (product === "water") {
        finalPrice = water * bought;
    } else if (product === "coffee") {
        finalPrice = coffee * bought;
    } else if (product === "coke") {
        finalPrice = coke * bought;
    } else if (product === "snacks") {
        finalPrice = snacks * bought;
    }
    console.log(finalPrice.toFixed(2))
} 

*/