function bitcoin(minedGrams) {
    let dayCount = 0;
    let finalPrice = 0;
    let bitcointsBought = 0;
    let bitcoinPrice = 11949.16;
    let gramsInMoney = 0;
    let dayBought = 0;
    let boolean = false;
    for (let i = 0; i < minedGrams.length; i++) {
        let gold = minedGrams[i]
        dayCount++
        gramsInMoney = 0;
        gramsInMoney = gold * 67.51;

        if (dayCount % 3 === 0) {
            gramsInMoney *= 0.70;
        }
        finalPrice += gramsInMoney;

        if (gramsInMoney >= bitcoinPrice) {
            bitcointsBought++
            finalPrice -= bitcoinPrice;

            if (bitcointsBought === 1) {
                boolean = true;
                dayBought = dayCount;
            }

        }
    }
    
    if (boolean === true) {
    console.log(`Bought bitcoins: ${bitcointsBought}`)
    console.log(`Day of the first purchased bitcoin: ${dayBought}`)
    console.log(`Left money: ${finalPrice.toFixed(2)} lv.`)
} else {
    console.log(`Bought bitcoins: ${bitcointsBought}`)
    console.log(`Left money: ${finalPrice.toFixed(2)} lv.`)
}
}

bitcoin([3124.15, 504.212, 2511.124])