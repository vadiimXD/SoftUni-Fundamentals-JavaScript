function cardGame(input) {
    let players = new Map();
    let powerCheck = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,

    }

    let typeCheck = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1

    }

    for (const line of input) {
        let [name, cards] = line.split(": ");

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        let assCards = cards.split(', ');

        for (const card of assCards) {
            players.get(name).add(card);
        }
    }
    for (const playerInfo of Array.from(players)) {
        let sum = 0;
        for (const card of playerInfo[1]) {
            let cardInfo = card.split("");
            let powerAsStr = cardInfo.splice(0, cardInfo.length - 1).join("");
            let typeAsStr = cardInfo[cardInfo.length - 1];
            let power = powerCheck[powerAsStr];
            let type = typeCheck[typeAsStr];
            sum += power * type
        }
        console.log(`${playerInfo[0]}: ${sum} `)
    }

}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])