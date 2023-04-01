function partyTime(input) {

    let vip = [];
    let regular = [];
    let command = input.shift()

    while (command !== "PARTY") {

        let isRegural = isNaN(command[0])

        if (isRegural === false) {
            vip.push(command)
        } else {
            regular.push(command)
        }
        command = input.shift()
    }
    let allGuestsList = vip.concat(regular)

    for (const el of input) {
        allGuestsList.splice(allGuestsList.indexOf(el), 1);
    }

    console.log(allGuestsList.length)
    allGuestsList.forEach((element) => {
        console.log(element)
    });
}

partyTime(['7IK9Yo0h',

    '9NoBUajQ',

    'Ce8vwPmE',

    'SVQXQCbc',

    'tSzE5t0p',

    'PARTY',

    '9NoBUajQ',

    'Ce8vwPmE',

    'SVQXQCbc'

]);