function furniture(shop) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+[?.\d]+)!(?<quantity>\d+)/
    console.log(`Bought furniture:`)
    let totalMoney = 0
    for (const product of shop) {
        if (product === "Purchase") {
            break;
        }

        if (pattern.test(product)) {
            let matched = pattern.exec(product)
            let productName = matched.groups.name
            let price = matched.groups.price
            let quantity = matched.groups.quantity
            console.log(productName)
            totalMoney += Number(price) * Number(quantity);
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`)
}

furniture(['>>Sofa<<312.23!3',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase']);

furniture(['>>Laptop<<312.2323!3',

    '>>TV<<300.21314!5',

    '>Invalid<<!5',

    '>>TV<<300.21314!20',

    '>>Invalid<!5',

    '>>TV<<30.21314!5',

    '>>Invalid<<!!5',

    'Purchase'])