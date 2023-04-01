function storeProvision(localStore, orderedStore) {
    let myStorage = {};
    for (let i = 0; i < localStore.length; i += 2) {
        let product = localStore[i];
        let quantity = localStore[i + 1]
        myStorage[product] = Number(quantity);
    }

    for (let i = 0; i < orderedStore.length; i += 2) {
        let product = orderedStore[i];
        let quantity = orderedStore[i + 1]

        if (myStorage.hasOwnProperty(product)) {
            myStorage[product] += Number(quantity)
        } else {
            myStorage[product] = Number(quantity)
        }
    }

    for (let key of Object.keys(myStorage)) {
        console.log(`${key} -> ${myStorage[key]}`)
    }

}

storeProvision([

    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'

],

    [

        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'

    ]);