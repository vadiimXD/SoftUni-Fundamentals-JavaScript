function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let priceNeedToPay = 0;
    let shieldCounter = 0;
    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 === 0) {
            priceNeedToPay += helmetPrice;
        }

        if (i % 3 === 0) {
            priceNeedToPay += swordPrice;
        }

        if (i % 6 === 0) {
            shieldCounter++
            priceNeedToPay += shieldPrice;

            if (shieldCounter % 2 === 0) {
                shieldCounter = 0;
                priceNeedToPay += armorPrice;
            }
        }

    }
    console.log(`Gladiator expenses: ${priceNeedToPay.toFixed(2)} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);