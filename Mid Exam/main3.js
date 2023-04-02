function solve(input) {
    let cards = input.shift().split(", ")
    let numberOfCards = input.shift()
    for (element of input) {

        let command = element.split(", ")

        if (command[0] === "Add") {
            if (cards.includes(command[1])) {
                console.log(`Card is already in the deck`)
            } else {
                cards.push(command[1])
                console.log(`Card successfully added`)
            }
        } else if (command[0] === "Remove") {
            if (cards.includes(command[1])) {
                cards = cards.filter(x => x !== command[1]);
                console.log(`Card successfully removed`)
            } else {
                console.log(`Card not found`)
            }

        } else if (command[0] === "Remove At") {
            if (command[1] < 0 || command[1] > cards.length) {
                console.log(`Index out of range`)
            } else {
                cards.splice(command[1], 1)
                console.log(`Card successfully removed`)
            }
        } else if (command[0] === "Insert") {
            if (command[1] < 0 || command[1] > cards.length) {
                console.log(`Index out of range`)
            } else {
                if (cards.includes(command[2])) {
                    console.log(`Card is already added`)
                } else {
                    cards.splice(command[1], 0, command[2])
                    console.log(`Card successfully added`)
                }
            }

        }
    }
    console.log(cards.join(", "))
}

solve(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"])
console.log(`---------------------`)
solve(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts", "2", "Add, Two of Clubs", "Remove, Five of Hearts"])
console.log(`---------------------`)
solve(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"])
console.log(`---------------------`)
