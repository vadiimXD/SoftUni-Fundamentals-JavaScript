function softUniBarIncome(arr) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<item>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+)\$/
    let totalPrice = 0;
    for (const line of arr) {
        if (line === "end of shift") {
            console.log(`Total income: ${totalPrice.toFixed(2)}`);
            break;
        }
        if (pattern.test(line)) {
            let matched = pattern.exec(line)
            let name = matched.groups.name;
            let item = matched.groups.item;
            let count = matched.groups.count;
            let price = matched.groups.price * count;
            totalPrice += price

            console.log(`${name}: ${item} - ${price.toFixed(2)}`)
        }
    }
}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',

    '%Peter%<Gum>1.3$',

    '%Maria%<Cola>|1|2.4',

    '%Valid%<Valid>valid|10|valid20$',

    'end of shift']);