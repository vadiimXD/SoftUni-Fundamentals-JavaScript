function aMinerTask(mine) {
    let storage = {};

    for (let i = 0; i < mine.length; i++) {

        if (i % 2 === 0) {
            if (!storage.hasOwnProperty(mine[i])) {
                storage[mine[i]] = 0
            } else {
                storage[mine[i]] += 0
            }
        } else {
            storage[mine[i - 1]] += Number(mine[i])
        }


    }
    let entries = Object.entries(storage)
    for (const [name, emp] of entries) {
        console.log(`${name} -> ${emp}`)
    }
}

aMinerTask([

    'gold',

    '155',

    'silver',

    '10',

    'copper',

    '17',

    'gold',

    '15'

]);
// if (myStorage.hasOwnProperty(product)) {
//     myStorage[product] += Number(quantity)
// } else {
//     myStorage[product] = Number(quantity)
// }